package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "dispositivos", path = "dispositivos")
public interface DispositivoRepository extends CrudRepository<Dispositivo, Long> {
    
}
