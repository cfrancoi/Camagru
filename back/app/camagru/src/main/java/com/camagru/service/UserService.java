package com.camagru.service;

import java.util.List;
import java.util.Optional;

import com.camagru.model.entity.UserEntity;

public interface UserService {
    
    public List<UserEntity> getAllUsers();

    public Optional<UserEntity> getUserById(Long id);

    public UserEntity createUser(UserEntity user);

    public UserEntity updateUser(UserEntity user);
}
