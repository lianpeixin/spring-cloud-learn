package com.learn.feign.service;

import org.springframework.stereotype.Component;

@Component
public class HelloServiceImpl implements HelloService {
    @Override
    public String hi(String name) {
        return "fall back : " + name;
    }
}
