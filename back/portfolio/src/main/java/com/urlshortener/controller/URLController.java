package com.urlshortener.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.urlshortener.model.URL;
import com.urlshortener.service.URLService;

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
    public ResponseEntity<Object> redirect(@PathVariable String shortCode) {
        Optional<URL> url = urlService.getUrlByShortCode(shortCode);
        return url.map(value -> ResponseEntity.status(302).header("Location", value.getLongUrl()).build())
                  .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
