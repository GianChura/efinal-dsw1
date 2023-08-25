package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {


	private final AnimeRepository repositoryA;
	private final PlataformaRepository repositoryP;
	private final UsuarioRepository repositoryU;
	private final DispositivoRepository repositoryD;

	@Autowired
	public DatabaseLoader(

		AnimeRepository repositoryA,
		PlataformaRepository repositoryP,
		UsuarioRepository repositoryU,
		DispositivoRepository repositoryD
		) {

		this.repositoryA = repositoryA;
		this.repositoryP = repositoryP;
		this.repositoryU = repositoryU;
		this.repositoryD = repositoryD;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryA.save(new Anime("Dragon Ball Z","Acción","291"));
		this.repositoryA.save(new Anime("One Piece","Acción","1053"));
		Anime aBaki = new Anime("Baki", "Accion", "54");
		this.repositoryA.save(aBaki);
		Anime aTekken = new Anime("Tekken", "Lucha", "64");
		this.repositoryA.save(aTekken);

		this.repositoryP.save(new Plataforma("Netflix"));
		this.repositoryP.save(new Plataforma("Amazon Prime"));
		this.repositoryP.save(new Plataforma("HBO"));
		Plataforma pDisney = new Plataforma("Disney");
		this.repositoryP.save(pDisney);
		Plataforma pParamont = new Plataforma("Paramont");
		this.repositoryP.save(pParamont);

		this.repositoryU.save(new Usuario("Giancarlo"));
		this.repositoryU.save(new Usuario("Christian"));
		Usuario uGaby = new Usuario("Gaby");
		this.repositoryU.save(uGaby);

		this.repositoryD.save(new Dispositivo(uGaby,pDisney,aBaki));
		this.repositoryD.save(new Dispositivo(uGaby,pParamont,aTekken));


		
		


	}
}