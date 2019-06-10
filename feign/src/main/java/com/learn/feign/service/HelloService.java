package com.learn.feign.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient("provider")
public interface HelloService {

    @RequestMapping("/")
    String hi(@RequestParam("name") String name);   // RequestParam注解要加，不然取不到参数
}
