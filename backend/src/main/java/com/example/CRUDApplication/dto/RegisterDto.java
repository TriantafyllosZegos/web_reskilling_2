package com.example.CRUDApplication.dto;

import lombok.Data;

import java.util.List;

@Data
public class RegisterDto {
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private List<String> roles;  // Assumes roles are identified by names or IDs during registration

}
