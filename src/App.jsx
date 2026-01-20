import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Inicio from './pages/Inicio'
import Panel from './pages/Panel'
import Usuarios from './pages/Usuarios'
import Contratos from './pages/Contratos'
import Configuracion from './pages/Configuracion'
import Reportes from './pages/Reportes'
import Manuales from './pages/Manuales'
import About from './pages/About'
import Logout from './pages/Logout'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

export default function App() {
  const location = useLocation()
  const isLogout = location.pathname === '/logout'
  return (
    <div className="app">
      {!isLogout && <Header userName="Nombre Apellido" userSub="" userEmail="correo@cenabast.cl" />}
      <div className="layout">
        {!isLogout && <Sidebar />}
        <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/panel" element={<Panel />} />
          <Route path="/gestion/usuarios" element={<Usuarios />} />
          <Route path="/gestion/contratos" element={<Contratos />} />
          <Route path="/gestion/configuracion" element={<Configuracion />} />
          <Route path="/reportes" element={<Reportes />} />
          <Route path="/manuales" element={<Manuales />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        </main>
      </div>
    </div>
  )
}
