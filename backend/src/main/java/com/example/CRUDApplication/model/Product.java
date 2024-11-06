package com.example.CRUDApplication.model;



import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;


import java.util.Date;

@Entity
@Table(name="Products")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString

public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(unique = true, nullable = false)
    @NotNull(message = "Product name cannot be null")
    private String product_name;

    @NotNull(message = "Product description cannot be null")
    private String product_description;

    @Min(value = 1, message = "Price must be greater than 0")
    private float price;


    @NotNull(message = "Category cannot be null")
    private String category;



    @Min(value = 0, message = "Sale must be at least 0")
    @Max(value = 100, message = "Sale must be at most 100")
    private int sale;

    @Min(value = 0, message = "Stock must be at least 0")
    private int stock;

    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    @Temporal(TemporalType.TIMESTAMP)
    private Date updated_at;

    @Min(value = 0, message = "Rating must be at least 0")
    @Max(value = 5, message = "Rating cannot be more than 10")
    private float rating_avg;

    @NotNull(message = "Large image URL cannot be null")
    private String large_image_url;

    @NotNull(message = "Small image URL cannot be null")
    private String small_image_url;

    @PrePersist
    protected void onCreate() {
        created_at = new Date();
        updated_at = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updated_at = new Date();
    }
}
