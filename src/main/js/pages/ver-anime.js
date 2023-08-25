const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState, useEffect} = require('react');
const client = require('../client');

const VerAnimePage = () => {

    let { id } = useParams();
    const [anime, setAnime] = useState({});

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/animes/' + id
        }).done(response=>setAnime(response.entity))
    }, [])


    return (
        <>
            <h1>Ver Anime</h1>

            <table>
                <tr>
                    <th>Nombre</th>
                    <td>{anime.nombre}</td>
                </tr>
                <tr>
                    <th>Genero</th>
                    <td>{anime.genero}</td>
                </tr>
                <tr>
                    <th>Capitulos</th>
                    <td>{anime.capitulos}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerAnimePage;