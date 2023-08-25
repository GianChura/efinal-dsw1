package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Anime {

	private @Id @GeneratedValue Long id;
	private String nombre;
	private String genero;
	private String capitulos;

	private Anime() {}

	public Anime(String nombre, String genero, String capitulos) {
		this.nombre = nombre;
		this.genero = genero;
		this.capitulos = capitulos;

	}

	

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		Anime anime = (Anime) o;
		return Objects.equals(id, anime.id) &&
			Objects.equals(nombre, anime.nombre)&&
			Objects.equals(genero, anime.genero)&&
			Objects.equals(capitulos, anime.capitulos);
	}

	@Override
	public int hashCode() {

		return Objects.hash(id, nombre,genero,capitulos);
	}


	@Override
	public String toString() {
		return "Anime{" +
			"id=" + id +
			", nombre='" + nombre + '\'' +
			", genero='" + genero + '\'' +
			", capitulos='" + capitulos + '\'' +

			'}';
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

}