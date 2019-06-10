package com.learn.config.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @Value("${name}")
    private String name;
    @RequestMapping("/")
    public String hi() {
        return "hi : " + name;
    }
}
