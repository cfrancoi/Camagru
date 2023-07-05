package com.camagru.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.camagru.model.entity.UserEntity;
//TODO https://www.youtube.com/watch?v=Nw-HupzygTM&list=PL82C6-O4XrHe3sDCodw31GjXbwRdCyyuY&index=7
@Repository
public interface UserRepository extends CrudRepository<UserEntity, Long> {
    
    Optional<UserEntity> findByUsername(String username);

}
