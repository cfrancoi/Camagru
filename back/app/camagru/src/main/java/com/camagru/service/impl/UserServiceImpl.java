package com.camagru.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.camagru.model.entity.UserEntity;
import com.camagru.repository.UserRepository;
import com.camagru.service.UserService;

import org.apache.commons.collections4.IterableUtils;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    UserServiceImpl() {}

    @Override
    public List<UserEntity> getAllUsers() {
        return IterableUtils.toList(userRepository.findAll());
    }

    @Override
    public Optional<UserEntity> getUserById(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public UserEntity createUser(UserEntity user) {
        return userRepository.save(user);
    }

    @Override
    public UserEntity updateUser(UserEntity user) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }
    
}
