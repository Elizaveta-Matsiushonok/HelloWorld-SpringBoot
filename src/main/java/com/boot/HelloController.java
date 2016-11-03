package com.boot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

/**
 * Created by User on 01.11.2016.
 */

@RestController
public class HelloController {

    @RequestMapping(value = "/hello")
    public ModelAndView hello() {
        ModelAndView mav = new ModelAndView();
        mav.setViewName("/hello");
        String str = "Hello World!";
        mav.addObject("message", str);
        return mav;
    }
}
