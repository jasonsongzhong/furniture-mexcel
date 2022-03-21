package com.furniture.mexcel.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
    @GetMapping("/")
    public ModelAndView index(){
        ModelAndView modelAndView = new ModelAndView("/html/index.html");
        return modelAndView;
    }
}
