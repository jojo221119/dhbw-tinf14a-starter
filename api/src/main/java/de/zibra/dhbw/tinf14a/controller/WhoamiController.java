package de.zibra.dhbw.tinf14a.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class WhoamiController {

    @RequestMapping("/whoami")
    public String whoamiAction(Model model, @RequestParam(name="name", required=false, defaultValue="Unknown") String name) {

        // Add given name to view model
        model.addAttribute("name", name);

        // Specifiy thymeleaf template
        return "whoami";
    }
}
