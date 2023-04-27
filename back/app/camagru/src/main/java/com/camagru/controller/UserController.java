package com.camagru.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camagru.model.entity.User;
import com.camagru.service.UserService;

@RestController()
@RequestMapping("user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public List<User> getAll() {
        return userService.getAllUsers();
    }

    @PutMapping()
    public String update() {
        return "Hello World";
    }

    @PostMapping()
    public User create() {
        return userService.createUser(new User());
    }
    
}
