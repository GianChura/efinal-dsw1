const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');

const NuevoDispositivoPage = () => {

    let { id } = useParams();

    const [plataformas, setPlataformas] = useState([])
    const [animes, setAnimes] = useState([])
    
    const [idPlataforma, setPlataforma] = useState('')
    const [idAnime, setAnime] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/dispositivos',
            entity: {
                usuario: 'http://localhost:8080/api/usuarios/'+id,
                plataforma: 'http://localhost:8080/api/plataformas/'+idPlataforma,
                anime: 'http://localhost:8080/api/animes/'+idAnime},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/plataformas'
        }).done(response=>{
            setPlataformas(response.entity._embedded.plataformas)
        })
        client({
            method: 'GET',
            path: '/api/animes'
        }).done(response=>{
            setAnimes(response.entity._embedded.animes)
        })

    },[])

    return (
        <>
            <h1>Nuevo Dispositivo</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='plataforma'>Plataforma </label>
                <select name="plataforma" id="plataforma" onChange={(e)=>{setPlataforma(e.target.value)}}>
                    {plataformas.map(plataforma => {	
                        const value = plataforma._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>[{plataforma.nombre}]</option>
                        )
                    })}
                </select><br />
                
                <label>Anime </label>
                <select name="anime" id="anime" onChange={(e)=>{setAnime(e.target.value)}}>
                    {animes.map(anime => {	
                        const value = anime._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>({anime.nombre})</option>
                        )
                    })}
                </select><br />

                <input type="submit" value="Nuevo Dispositivo" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoDispositivoPage;