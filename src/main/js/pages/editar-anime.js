const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarAnimePage = ()=>{

    const [anime, setAnime] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/animes/'+id
        }).done((response)=>setAnime(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/animes/'+id,
            entity: anime,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Anime</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={anime.nombre} onChange={(e)=>setAnime({...anime, nombre: e.target.value})} /> <br/>
                <label>Genero</label>
                <input type="text" id="genero" name="genero" value={anime.genero} onChange={(e)=>setAnime({...anime, genero: e.target.value})}  /> <br/>
                <label>Capitulos</label>
                <input type="text" id="capitulos" name="capitulos" value={anime.capitulos} onChange={(e)=>setAnime({...anime, capitulos: e.target.value})}  /> <br/>
                
                <input type="submit" value="Editar Anime" />
            </form>

        </>
    )
}

module.exports = EditarAnimePage