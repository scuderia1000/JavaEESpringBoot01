package com.valentin.ershov.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Valek on 30.10.2017.
 */
@Controller
public class ForwardingController {

    @RequestMapping("/{path:^(?!api)[a-z0-9]+}/**")
    public String forward() {
        return "forward:/";
    }
}
