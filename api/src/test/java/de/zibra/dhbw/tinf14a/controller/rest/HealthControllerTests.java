package de.zibra.dhbw.tinf14a.controller.rest;

import com.jayway.jsonpath.JsonPath;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import javax.persistence.EntityManagerFactory;
import java.util.*;

import static org.assertj.core.api.Java6Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

/**
 *
 */
@RunWith(SpringRunner.class)
@WebMvcTest(HealthController.class)
public class HealthControllerTests {

    /** Dependency mock for jdbc template mock */
    @MockBean
    private JdbcTemplate jdbcTemplateMock;

    /** Dependency mock for health controller */
    @MockBean
    private EntityManagerFactory entityManagerFactoryMock;

    /** Mock to test correct routing */
    @Autowired
    private MockMvc mvc;

    @Before
    public void setup() {

        // Define test data for precondition
        List<Map<String, Object>> mockData = new ArrayList<>();
        //
        Map<String, Object> innerMockData = new HashMap<>();
        innerMockData.put("Variable1", "Value1");
        innerMockData.put("Variable2", "Value2");
        //
        mockData.add(innerMockData);

        // Define PRECONDITION data from database
        given(this.jdbcTemplateMock.queryForList("SHOW STATUS;")).willReturn(mockData);
    }

    @Test
    public void testControllerReturnsJsonArray() throws Exception {

        // Check if Response is JSON
        this.mvc.perform(get("/health").accept(MediaType.APPLICATION_JSON))
                .andDo(result -> {

                    // Assert if JSON parsing fails
                    assertThat(JsonPath.parse(result)).isNotNull();
                });
    }

    @Test
    public void testControllerAsksJdbcDatabase() throws Exception {

        // Check if Response contains correct Data in JSON format
        this.mvc.perform(get("/health").accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().json("[{\"Variable1\": \"Value1\"}]"));
    }
}
