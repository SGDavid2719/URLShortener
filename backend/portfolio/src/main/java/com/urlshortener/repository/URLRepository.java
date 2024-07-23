package com.urlshortener.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.urlshortener.model.URL;
import java.util.Optional;
import java.util.List;

public interface URLRepository extends JpaRepository<URL, Long> {
    Optional<URL> findByShortCode(String shortCode);

    List<URL> findAll();
}