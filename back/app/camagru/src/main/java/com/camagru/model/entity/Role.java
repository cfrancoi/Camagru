package com.camagru.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "roles")
@Getter
@Setter
public class Role extends AbstractEntity<Long> {

    @Column(name = "name", nullable = false)
    private String name;
    
}
