const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerUsuarioPage = () => {

    let { id } = useParams();
    const [usuario, setUsuario] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/usuarios/' + id
        }).done(response=>setUsuario(response.entity))
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

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerUsuarioPage;