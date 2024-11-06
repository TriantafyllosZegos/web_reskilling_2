package com.example.CRUDApplication.controller;



import com.example.CRUDApplication.model.Product;
import com.example.CRUDApplication.repository.ProductRepo;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.util.Optional;



@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/products")

public class ProductController {

    @Autowired
    private ProductRepo productRepo;

    // Returns all products with pagination
    @GetMapping
    public ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "10") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<Product> productPage = productRepo.findAll(pageable);
 
            if (productPage.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(productPage, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Returns products by category with pagination
    @GetMapping("/category/{category}")
    public ResponseEntity<Page<Product>> getProductsByCategory(@PathVariable String category,
                                                               @RequestParam(defaultValue = "0") int page,
                                                               @RequestParam(defaultValue = "10") int size) {
        try {
            Pageable pageable = PageRequest.of(page, size);
            Page<Product> productPage = productRepo.findByCategory(category, pageable);

            if (productPage.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(productPage, HttpStatus.OK);
        } catch (Exception ex) {

            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Get one product
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Optional<Product> productData = productRepo.findById(id);

        if (productData.isPresent()) {
            return new ResponseEntity<>(productData.get(), HttpStatus.OK);
        }

        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping
    public ResponseEntity<Product> addProduct(@RequestBody Product product) {
        Product productObj = productRepo.save(product);
        return new ResponseEntity<>(productObj, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProductById(@PathVariable Long id, @Valid @RequestBody Product newProductData) {
        Optional<Product> oldProductData = productRepo.findById(id);

        if (oldProductData.isPresent()) {
            Product updatedProductData = oldProductData.get();
            // Update fields conditionally
            if (newProductData.getProduct_name() != null) {
                updatedProductData.setProduct_name(newProductData.getProduct_name());
            }
            if (newProductData.getProduct_description() != null) {
                updatedProductData.setProduct_description(newProductData.getProduct_description());
            }
            if (newProductData.getCategory() != null) {
                updatedProductData.setCategory(newProductData.getCategory());
            }
            if (newProductData.getPrice() > 0 ) {
                updatedProductData.setPrice(newProductData.getPrice());
            }
            if (newProductData.getSale() >= 0) {
                updatedProductData.setSale(newProductData.getSale());
            }
            if (newProductData.getStock() >= 0) {
                updatedProductData.setStock(newProductData.getStock());
            }
            if (newProductData.getRating_avg() >= 0 && newProductData.getRating_avg() <= 10 ) {
                updatedProductData.setRating_avg(newProductData.getRating_avg());
            }
            if (newProductData.getLarge_image_url() != null) {
                updatedProductData.setLarge_image_url(newProductData.getLarge_image_url());
            }
            if (newProductData.getSmall_image_url() != null) {
                updatedProductData.setSmall_image_url(newProductData.getSmall_image_url());
            }


            Product productObj = productRepo.save(updatedProductData);
            return new ResponseEntity<>(productObj, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteProductById(@PathVariable Long id) {
        productRepo.deleteById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
