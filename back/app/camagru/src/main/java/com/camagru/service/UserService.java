package com.camagru.service;

import java.util.List;
import java.util.Optional;

import com.camagru.model.entity.User;

public interface UserService {
    
    public List<User> getAllUsers();

    public Optional<User> getUserById(Long id);

    public User createUser(User user);

    public User updateUser(User user);
}
