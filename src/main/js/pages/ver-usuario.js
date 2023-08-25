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
            path: '/api/usuarios/' + id + '/formacion'
        }).done(response => setDispositivos(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Usuario</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{usuario.nombre}</td>
                </tr>
            </table>

            <hr />
            <h2>Formación</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>Anime</th>
                        <th>PLataforma</th>
                    </tr>
                </thead>
                <tbody>

                    {dispositivos.map(dispositivos=>{
                        return(
                            <tr key={dispositivos.ID}>
                                <td>{dispositivos.PLATAFORMA}</td>
                                <td>{dispositivos.ANIME}</td>
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