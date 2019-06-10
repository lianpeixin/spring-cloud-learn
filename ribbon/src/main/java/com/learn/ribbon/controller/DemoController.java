package com.learn.ribbon.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DemoController {
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/")
    public String hi(String name) {
        return restTemplate.getForObject("http://provider?name=" + name, String.class);
    }
}
