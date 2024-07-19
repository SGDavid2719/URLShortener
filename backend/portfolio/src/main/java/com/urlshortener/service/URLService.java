package com.urlshortener.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.urlshortener.model.URL;
import com.urlshortener.repository.URLRepository;
import org.apache.commons.codec.digest.DigestUtils;

import java.util.Optional;

@Service
public class URLService {
    @Autowired
    private URLRepository urlRepository;

    public URL shortenUrl(String longUrl) {
        String shortCode = generateShortCode(longUrl);
        URL url = new URL();
        url.setLongUrl(longUrl);
        url.setShortCode(shortCode);
        return urlRepository.save(url);
    }

    public Optional<URL> getUrlByShortCode(String shortCode) {
        return urlRepository.findByShortCode(shortCode);
    }

    private String generateShortCode(String longUrl) {
        String shortCode;
        do {
            String sha256hex = DigestUtils.sha256Hex(longUrl + System.currentTimeMillis());
            shortCode = sha256hex.substring(0, 6);
        } while (urlRepository.findByShortCode(shortCode).isPresent());
        return shortCode;
    }
}
