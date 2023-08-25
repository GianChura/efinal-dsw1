const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerUsuarioPage = () => {

    let { id } = useParams();
    const [usuario, setUsuario] = useState({});
    const [dispositivos, setDispositivos] = useState([]);


    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/usuarios/' + id
        }).done(response=>setUsuario(response.entity))
        client({
            method: 'GET',
            path: '/api/usuarios/' + id + '/dispositivo'
        }).done(response => setDispositivos(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Usuario</h1>
            <hr/>
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{usuario.nombre}</td>
                    </tr>
                </tbody>
            </table>
            <hr/>

            <h2>Dispositivo</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Plataforma</th>
                        <th>Anime</th>
                    </tr>
                </thead>
                <tbody>

                    {dispositivos.map(dispositivo=>{
                        return(
                            <tr key={dispositivo.ID}>
                                <td>{dispositivo.PLATAFORMA}</td>
                                <td>{dispositivo.ANIME}</td>
                            </tr>
                        )
                    })}

                </tbody>

            </table>

            <hr />
            <Link to={`/ver-usuario/${id}/nuevo-dispositivo`}>Nuevo Dispositivo</Link> |
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerUsuarioPage;