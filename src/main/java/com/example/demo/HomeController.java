package com.example.demo;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/usuarios/{id}/dispositivo")
	public @ResponseBody List<Map <String, Object>> dispositivo(@PathVariable Integer id){
		String sql = "SELECT dispositivo.id as ID, plataforma.nombre as PLATAFORMA, anime.nombre as ANIME FROM dispositivo JOIN plataforma ON dispositivo.id_plataforma=plataforma.id JOIN anime ON dispositivo.id_anime=anime.id WHERE dispositivo.id_usuario = ?";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql, id);
		return queryResult;
	}

	/**
	 * 
	 * 
	 * 
	 * 
	 */

}