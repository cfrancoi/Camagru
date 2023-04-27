package com.camagru.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("user")
public class UserController {

    @GetMapping()
    public String getAll() {
        return "Hello World";
    }

    @PutMapping()
    public String update(@PathVariable String id) {
        return "Hello World";
    }

    @PostMapping()
    public String create(@PathVariable String id) {
        return "Hello World";
    }
    
}
