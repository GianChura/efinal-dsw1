package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "animes", path = "animes")
public interface AnimeRepository extends CrudRepository<Anime, Long> {
    
}
