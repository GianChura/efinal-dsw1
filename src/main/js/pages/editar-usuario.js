const React = require('react');
const {useState, useEffect} = require('react');
const { Link, useParams } = require('react-router-dom');
const client = require('../client');

const EditarUsuarioPage = ()=>{

    const [usuario, setUsuario] = useState({})
    let { id } = useParams();

    useEffect(()=>{
        client({
            method: 'GET',
            path: '/api/usuarios/'+id
        }).done((response)=>setUsuario(response.entity))
    },[])

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/usuarios/'+id,
            entity: usuario,
            headers: {'Content-Type': 'application/json'}
        }).done(()=>window.location = '/')
    }

    return(
        <>
            <h1>Editar Usuario</h1>

            <form onSubmit={handleSubmit}>
                <label>Usuario</label>
                <input type="text" id="nombre" name="nombre" value={usuario.nombre} onChange={(e)=>setUsuario({...usuario, nombre: e.target.value})} /> <br/>
                
                <input type="submit" value="Editar Usuario" />
            </form>

        </>
    )
}

module.exports = EditarUsuarioPage