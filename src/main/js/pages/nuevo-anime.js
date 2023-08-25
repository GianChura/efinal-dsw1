const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoAnimePage = () => {

    const [nombre, setNombre] = useState('')
    const [genero, setGenero] = useState('')
    const [capitulos, setCapitulos] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/animes',
            entity: {nombre: nombre, genero: genero, capitulos: capitulos},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Instrumento</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={e=>setNombre(e.target.value)} /> <br />
            <label>Genero</label> <br />
            <input type="text" id='genero' name='genero' onChange={e=>setGenero(e.target.value)} /> <br />
            <label>Capitulos</label> <br />
            <input type="text" id='capitulos' name='capitulos' onChange={e=>setCapitulos(e.target.value)} /> <br />
            <input type="submit" value="Nuevo Anime" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoAnimePage;