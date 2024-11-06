package com.example.CRUDApplication.repository;

import com.example.CRUDApplication.model.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

@Repository
public interface ProductRepo extends JpaRepository<Product, Long> {

    Page<Product> findByCategory(String category, Pageable pageable);
}
