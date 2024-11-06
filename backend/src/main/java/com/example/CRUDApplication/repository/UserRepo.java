package com.example.CRUDApplication.repository;


import com.example.CRUDApplication.model.UserEntity;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Long> {
    @Cacheable("users")
    Optional<UserEntity> findByUsername(String username);
    Boolean existsByUsername(String username);
}
