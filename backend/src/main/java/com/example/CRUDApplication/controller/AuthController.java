package com.example.CRUDApplication.controller;

import com.example.CRUDApplication.dto.AuthResponseDTO;
import com.example.CRUDApplication.dto.LoginDto;
import com.example.CRUDApplication.dto.RegisterDto;
import com.example.CRUDApplication.model.Role;
import com.example.CRUDApplication.model.UserEntity;
import com.example.CRUDApplication.repository.RoleRepo;
import com.example.CRUDApplication.repository.UserRepo;
import com.example.CRUDApplication.security.JWTGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
@RequestMapping("/api/auth")

public class AuthController {

    private AuthenticationManager authenticationManager;
    private UserRepo userRepo;
    private RoleRepo roleRepo;
    private PasswordEncoder passwordEncoder;
    private JWTGenerator jwtGenerator;

    @Autowired
    public AuthController(
            AuthenticationManager authenticationManager,
            UserRepo userRepo,
            RoleRepo roleRepo,
            PasswordEncoder passwordEncoder,
            JWTGenerator jwtGenerator

    ) {
        this.authenticationManager = authenticationManager;
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
        this.passwordEncoder = passwordEncoder;
        this.jwtGenerator = jwtGenerator;
    }
    @PostMapping("/login")
        public ResponseEntity<AuthResponseDTO> login(@RequestBody LoginDto loginDto){
        Authentication authentication = authenticationManager
                .authenticate(
                        new UsernamePasswordAuthenticationToken(loginDto.getUsername(), loginDto.getPassword())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = jwtGenerator.generateToken(authentication);
        return new ResponseEntity<>(new AuthResponseDTO(token), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterDto registerDto) {
        if (userRepo.existsByUsername(registerDto.getUsername())) {
            return new ResponseEntity<>("Username is taken !", HttpStatus.BAD_REQUEST);
        }

        UserEntity user = new UserEntity();
        user.setUsername(registerDto.getUsername());
        user.setPassword(passwordEncoder.encode((registerDto.getPassword())));
        user.setEmail(registerDto.getEmail());
        user.setFirst_name(registerDto.getFirstName());
        user.setLast_name(registerDto.getLastName());

        Role roles = roleRepo.findByName("USER").get();
        user.setRoles(Collections.singletonList(roles));

        user.setCreated_at(new Date());
        user.setUpdated_at(new Date());

        userRepo.save(user);
        return new ResponseEntity<>("User registered success", HttpStatus.OK);
    }
}
