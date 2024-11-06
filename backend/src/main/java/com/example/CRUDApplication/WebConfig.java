package com.example.CRUDApplication;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Apply to all endpoints
                .allowedOrigins("http://localhost:3000") // Allow only frontend origin
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allow required HTTP methods
                .allowedHeaders("Authorization", "Content-Type") // Allow Authorization and Content-Type headers
                .allowCredentials(true); // Allow sending of credentials (e.g., cookies, Authorization headers)
    }
}
