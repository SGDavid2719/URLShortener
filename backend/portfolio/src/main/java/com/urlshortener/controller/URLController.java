package com.urlshortener.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import com.urlshortener.model.URL;
import com.urlshortener.service.URLService;

import java.net.URI;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class URLController {
    @Autowired
    private URLService urlService;

    @PostMapping("/shorten")
    public ResponseEntity<URL> shortenUrl(@RequestBody String longUrl) {
        URL url = urlService.shortenUrl(longUrl);
        return ResponseEntity.ok(url);
    }

    @GetMapping("/{shortCode}")
    public ResponseEntity<String> redirect(@PathVariable String shortCode) {
        Optional<URL> url = urlService.getUrlByShortCode(shortCode);
        return url
                .map(value -> ResponseEntity.ok(value.getLongUrl()))
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                        .body("Short URL not found for the given long URL"));
    }
}