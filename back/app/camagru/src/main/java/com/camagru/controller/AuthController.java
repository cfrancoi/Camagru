package com.camagru.controller;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.camagru.repository.RoleRepository;
import com.camagru.repository.UserRepository;


//TODO move to service logique and create Exception

@RestController
@RequestMapping("auth")
public class AuthController {
    private AuthenticationManager authenticationManager;
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private PasswordEncoder passwordEncoder;


    AuthController( AuthenticationManager authenticationManager,
                    UserRepository userRepository,
                    RoleRepository roleRepository,
                    PasswordEncoder passwordEncoder)
    {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;

    }

    @PostMapping("register")
    public RespoenseEntity<String> register() {
        
    }
}
