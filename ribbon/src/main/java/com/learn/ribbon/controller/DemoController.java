package com.learn.ribbon.controller;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DemoController {
    @Autowired
    private RestTemplate restTemplate;

    @RequestMapping("/")
    @HystrixCommand(fallbackMethod = "hiFallBack")
    public String hi(String name) {
        return restTemplate.getForObject("http://provider?name=" + name, String.class);
    }

    public String hiFallBack(String name) {
        return "fall back : " + name;
    }
}
