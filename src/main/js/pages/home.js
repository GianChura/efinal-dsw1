const React = require('react');
const client = require('../client');
const {Link} = require('react-router-dom');

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {  animes:[], plataformas:[], usuarios:[]};
	}
	componentDidMount() {	

		client({ method: 'GET', path: '/api/animes' }).done(response => {
			this.setState({ animes: response.entity._embedded.animes });
		});

		client({ method: 'GET', path: '/api/plataformas' }).done(response => {
			this.setState({ plataformas: response.entity._embedded.plataformas });
		});
		client({ method: 'GET', path: '/api/usuarios' }).done(response => {
			this.setState({ usuarios: response.entity._embedded.usuarios });
		});



	}
	render() {
		return (
			<>
				<h1>EXAMEN FINAL: CHRISTIAN GIANCARLO CHURA INGALLA</h1>

				<div style={  {"width": "100%", "display": "flex"}   }>
					
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Animes" emoji="👩🏼‍🎤" />
						<AnimeList animes={this.state.animes} />
						<Link to="/nuevo-anime">Nuevo Anime</Link>
					</div>

					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Plataformas" emoji="👩🏼‍🎤" />
						<PlataformaList plataformas={this.state.plataformas} />
						<Link to="/nueva-plataforma">Nueva Plataforma</Link>
					</div>
					
					<div style={{"width": "calc(100% / 3)"}}>
						<Titulo entidad="Usuarios" emoji="👩🏼‍🎤" />
						<UsuarioList usuarios={this.state.usuarios} />
						<Link to="/nuevo-usuario">Nuevo Usuario</Link>
					</div>
				</div>


			</>
		)
	}
}

const Titulo = (props) => {
	return (
		<>
			<hr />
			<h2>{props.emoji} - {props.entidad}</h2>
			<hr />
			Lista completa de {props.entidad.toLowerCase()}
		</>
	)
}




//LISTA DE ANIMES
class AnimeList extends React.Component {
	render() {
		const animes = this.props.animes.map(anime =>
			<Anime key={anime._links.self.href} anime={anime} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>
						<th>Genero</th>
						<th>Capitulos</th>
						<th>Acciones</th>
					</tr>
					{animes}
				</tbody>
			</table>
		)
	}
}


class PlataformaList extends React.Component {
	render() {
		const plataformas = this.props.plataformas.map(plataforma =>
			<Plataforma key={plataforma._links.self.href} plataforma={plataforma} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>		
						<th>Acciones</th>				
					</tr>
					{plataformas}
				</tbody>
			</table>
		)
	}
}

class UsuarioList extends React.Component {
	render() {
		const usuarios = this.props.usuarios.map(usuario =>
			<Usuario key={usuario._links.self.href} usuario={usuario} />
		);
		return (
			<table border="1">
				<tbody>
					<tr>
						<th>Nombre</th>		
						<th>Acciones</th>				
					</tr>
					{usuarios}
				</tbody>
			</table>
		)
	}
}







class Anime extends React.Component {
	render() {
		const id = this.props.anime._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.anime.nombre}</td>
				<td>{this.props.anime.genero}</td>
				<td>{this.props.anime.capitulos}</td>
				<td>
					<Link to={"/ver-anime/" + id}>Ver</Link>	|
					<Link to={"/editar-anime/" + id}>Editar</Link>					
				</td>
				
			</tr>
		)
	}
}


class Plataforma extends React.Component {
	render() {
		const id = this.props.plataforma._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.plataforma.nombre}</td>
			
				<td>
					<Link to={"/ver-plataforma/" + id}>Ver</Link>	|
					<Link to={"/editar-plataforma/" + id}>Editar</Link>					
				</td>
				
			</tr>
		)
	}
}


class Usuario extends React.Component {
	render() {
		const id = this.props.usuario._links.self.href.split("/").slice(-1)

		return (
			<tr>
				<td>{this.props.usuario.nombre}</td>
			
				<td>
					<Link to={"/ver-usuario/" + id}>Ver</Link>	|
					<Link to={"/editar-usuario/" + id}>Editar</Link>					
				</td>
				
			</tr>
		)
	}
}

module.exports = HomePage;