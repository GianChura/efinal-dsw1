package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryI;
	private final MusicoRepository repositoryM;
	private final BandaRepository repositoryB;
	private final IntegranteRepository repositoryN;
	private final AnimeRepository repositoryA;
	private final PlataformaRepository repositoryP;
	private final UsuarioRepository repositoryU;
	private final DispositivoRepository repositoryD;

	@Autowired
	public DatabaseLoader(
		InstrumentoRepository repositoryI,
		MusicoRepository repositoryM,
		BandaRepository repositoryB,
		IntegranteRepository repositoryN,
		AnimeRepository repositoryA,
		PlataformaRepository repositoryP,
		UsuarioRepository repositoryU,
		DispositivoRepository repositoryD
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
		this.repositoryA = repositoryA;
		this.repositoryP = repositoryP;
		this.repositoryU = repositoryU;
		this.repositoryD = repositoryD;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Instrumento("Guitarra", "Cuerda", "de madera, con caja de resonancia, 6 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Ukelele","Cuerda","de madera, con caja de resonancia pequeña, 4 cuerdas templadas"));
		this.repositoryI.save(new Instrumento("Melódica","Viento","teclado pequeño de 2 octavas, sonorizado por soplido"));		
		Instrumento iVoz = new Instrumento("Voz","Viento",".");
		this.repositoryI.save(iVoz);
		
		Instrumento iGuitarraElectrica = new Instrumento("Guitarra Electrica","Electrónico", ".");
		this.repositoryI.save(iGuitarraElectrica);

		this.repositoryI.save(new Instrumento("Batería","Percusión","."));

		this.repositoryM.save(new Musico("Daniel F"));
		Musico mFreddy = new Musico("Freddy");
		this.repositoryM.save(mFreddy);

		Musico mBrian = new Musico("Brian");
		this.repositoryM.save(mBrian);

		Banda bQueen = new Banda("Queen");
		this.repositoryB.save(bQueen);

		this.repositoryN.save(new Integrante(bQueen, mFreddy, iVoz));
		this.repositoryN.save(new Integrante(bQueen, mBrian, iGuitarraElectrica));


		this.repositoryA.save(new Anime("Dragon Ball Z","Acción","291"));
		this.repositoryA.save(new Anime("One Piece","Acción","1053"));
		Anime aBaki = new Anime("Baki", "Accion", ".");
		this.repositoryA.save(aBaki);
		Anime aTekken = new Anime("Tekken", "Lucha", ".");
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