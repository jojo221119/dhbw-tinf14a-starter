package de.zibra.dhbw.tinf14a.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import java.util.List;
import java.util.Map;

/**
 * Simple REST controller returns health information
 */
@RestController
public class HealthController {

    /**
     * Use simple Spring JDBC Template for SQL querying
     */
    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @CrossOrigin
    @RequestMapping("/health")
    @ResponseBody
    public List<Map<String, Object>> check() throws Exception {

        // run SHOW STATUS on mysql connection
        List<Map<String, Object>> result = this.jdbcTemplate.queryForList("SHOW STATUS;");

        // ...and return result as a JSON object
        return result;
    }

    @CrossOrigin
    @RequestMapping("/health-with-jpa")
    @ResponseBody
    public List<Object[]> checkWithJpa() {

        // Use a new entity manager
        EntityManager entityManager = this.entityManagerFactory.createEntityManager();

        // Use Entity manager to make a native query
        return entityManager.createNativeQuery("SHOW STATUS;").getResultList();
    }

    /*
     * Getter and Setters
     */
    public JdbcTemplate getJdbcTemplate() {
        return jdbcTemplate;
    }

    public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }
}