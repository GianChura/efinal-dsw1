const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const NuevoMusicoPage = require('./pages/nuevo-musico');
const VerInstrumentoPage = require('./pages/ver-instrumento');
const NuevoInstrumentoPage = require('./pages/nuevo-instrumento');
const VerMusicoPage = require('./pages/ver-musico');
const EditarInstrumentoPage = require('./pages/editar-instrumento');
const VerBandaPage = require('./pages/ver-banda');
const NuevoIntegrantePage = require('./pages/nuevo-integrante');
const VerAnimePage=require('./pages/ver-anime');
const NuevoAnimePage= require('./pages/nuevo-anime');
const EditarAnimePage= require('./pages/editar-anime');
const VerPlataformaPage=require('./pages/ver-plataforma');
const NuevaPlataformaPage= require('./pages/nueva-plataforma');
const EditarPlataformaPage= require('./pages/editar-plataforma');
const VerUsuarioPage= require('./pages/ver-usuario');
const NuevoUsuarioPage= require('./pages/nuevo-usuario');
const EditarUsuarioPage= require('./pages/editar-usuario');
const NuevoDispositivoPage = require('./pages/nuevo-dispositivo');

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-instrumento/:id', element: <VerInstrumentoPage /> },
	{ path: '/nuevo-instrumento', element: <NuevoInstrumentoPage /> },
	{ path: '/ver-musico/:id', element: <VerMusicoPage /> },
	{ path: '/nuevo-musico', element: <NuevoMusicoPage /> },
	{ path: '/editar-instrumento/:id', element: <EditarInstrumentoPage /> },
	{ path: '/ver-banda/:id', element: <VerBandaPage /> },
	{ path: '/ver-banda/:id/nuevo-integrante', element: <NuevoIntegrantePage /> },
	{ path: '/ver-anime/:id', element: <VerAnimePage /> },
	{ path: '/nuevo-anime', element: <NuevoAnimePage/> },
	{ path: '/editar-anime/:id', element: <EditarAnimePage /> },
	{ path: '/ver-plataforma/:id', element: <VerPlataformaPage /> },
	{ path: '/nueva-plataforma', element: <NuevaPlataformaPage/> },
	{ path: '/editar-plataforma/:id', element: <EditarPlataformaPage /> },
	{ path: '/ver-usuario/:id', element: <VerUsuarioPage /> },
	{ path: '/nuevo-usuario', element: <NuevoUsuarioPage/> },
	{ path: '/editar-usuario/:id', element: <EditarUsuarioPage /> },
	{ path: '/ver-usuario/:id/nuevo-dispositivo', element: <NuevoDispositivoPage /> },



])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))