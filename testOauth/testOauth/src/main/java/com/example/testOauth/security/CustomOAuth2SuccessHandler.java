package com.example.testOauth.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.client.OAuth2AuthorizationSuccessHandler;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class CustomOAuth2SuccessHandler implements AuthenticationSuccessHandler {

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authentication) throws IOException, ServletException {
        AuthenticationSuccessHandler.super.onAuthenticationSuccess(request, response, chain, authentication);
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        OAuth2AuthenticationToken oauthToken = (OAuth2AuthenticationToken) authentication;

        // Extract information from the OAuth2AuthenticationToken
        OAuth2User oauthUser = oauthToken. getPrincipal();
        String email = oauthUser.getAttribute("email");
        String pictureUrl = oauthUser.getAttribute("picture");
        String name =  oauthUser.getAttribute("name");


        Cookie cookie = new Cookie("pictureUrl", pictureUrl);
        Cookie cookie2 = new Cookie("email", email);
        Cookie cookie3 = new Cookie("name", name);

        cookie.setPath("/");
        cookie.setMaxAge(3000); // Cookie will expire in 1 hour

        cookie2.setPath("/");
        cookie2.setMaxAge(3000); // Cookie will expire in 1 hour

        cookie3.setPath("/");
        cookie3.setMaxAge(3000); // Cookie will expire in 1 hour

        response.addCookie(cookie);
        response.addCookie(cookie2);
        response.addCookie(cookie3);

        // Redirect to a specific URL
        response.sendRedirect("http://localhost:3000/oauth2/login/success");

    }
}
