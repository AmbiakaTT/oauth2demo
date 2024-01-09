package com.example.testOauth.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.core.endpoint.OAuth2AuthorizationRequest;
import org.springframework.security.oauth2.core.user.OAuth2User;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {


    @Autowired
    private final ClientRegistration googleClientRegistration;  // Inject your ClientRegistration

    public UserController(ClientRegistration thegoogleClientRegistration)      {
        googleClientRegistration = thegoogleClientRegistration;
    }

    @GetMapping("/abc")
        public ResponseEntity<?> getUserInfo(@AuthenticationPrincipal OAuth2User principal) {
        // Access user information
        String email = principal.getAttribute("email");
        String pictureUrl = principal.getAttribute("picture");
        String name =  principal.getAttribute("name");
        return ResponseEntity.ok("Welcome" + " " + name + " " + email + " " + pictureUrl );
    }


}