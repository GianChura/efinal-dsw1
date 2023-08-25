const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarPlataformaPage = ()=>{

    const [plataforma, setPlataforma] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/plataformas/'+id
        }).done((response)=>setPlataforma(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/plataformas/'+id,
            entity: plataforma,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Plataforma</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={plataforma.nombre} onChange={(e)=>setPlataforma({...plataforma, nombre: e.target.value})} /> <br/>
                
                <input type="submit" value="Editar Plataforma" />
            </form>

        </>
    )
}

module.exports = EditarPlataformaPage