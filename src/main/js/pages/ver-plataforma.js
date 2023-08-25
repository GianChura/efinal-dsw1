const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerPlataformaPage = () => {

    let { id } = useParams();
    const [plataforma, setPlataforma] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/plataformas/' + id
        }).done(response=>setPlataforma(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Plataforma</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{plataforma.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerPlataformaPage;