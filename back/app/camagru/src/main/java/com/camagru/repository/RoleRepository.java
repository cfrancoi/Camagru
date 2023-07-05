package com.camagru.repository;

import java.util.Optional;

import org.springframework.stereotype.Repository;

import com.camagru.model.entity.Role;

@Repository
public interface RoleRepository {
    
    Optional<Role> findByName(String name);

}
