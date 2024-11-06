package com.example.CRUDApplication.security;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Encoders;

public class SecurityConstants {
    public static final long JWT_EXPIRATION = 70000;
    public static final String JWT_SECRET = Encoders.BASE64.encode(Keys.secretKeyFor(SignatureAlgorithm.HS512).getEncoded());

}
