import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './header.css'

export default function Header({ userName = 'Nombre Apellido', userSub = '', userEmail = '' }){
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const rightRef = useRef(null)
  const [menuWidth, setMenuWidth] = useState(260)

  useEffect(()=>{
    function handleDocClick(e){
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  useEffect(()=>{
    function updateWidth(){
      try{
        const w = rightRef.current ? rightRef.current.offsetWidth : 260
        setMenuWidth(w)
      }catch(e){ setMenuWidth(260) }
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const navigate = useNavigate()

  function handleLogout(){
    // TODO: call logout endpoint / clear tokens here if needed
    // navigate immediately so App can hide Header/sidebar on the /logout route
    navigate('/logout')
  }

  const initials = (userName || '')
    .split(' ')
    .filter(Boolean)
    .map(n => n[0])
    .slice(0,2)
    .join('')
    .toUpperCase()

  return (
    <>
    <header className="site-header">
      <div className="container">
        <div className="left-group">
          <div className="logo">
            <Link to="/">
              <img src="/Logo Cenabast.svg" alt="Cenabast" width="137" height="30" />
            </Link>
          </div>
          <div className="institution-pill">
            <div className="institution-text">Nombre del sistema</div>
          </div>
        </div>

        <div className="search-group">
          <div className="search-wrapper">
            <div className="search-input">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input placeholder="Buscar" />
            </div>
            <button className="cta">Buscar</button>
          </div>
        </div>

        <div className="right-group" ref={rightRef}>
          <div className="user-area">
            <div className="avatar"><span className="ab-text">{initials}</span></div>
            <div className="user-texts">
              <div className="user-name">{userName}</div>
              {userEmail ? <div className="user-email">{userEmail}</div> : null}
            </div>
          </div>

          <div className="menu-wrapper" ref={menuRef}>
            <button className="icon-btn" onClick={(e)=>{e.stopPropagation(); setOpen(v=>!v)}} aria-haspopup="true" aria-expanded={open} aria-label="Abrir menú de usuario">
              <img src="/iconButton.svg" alt="Expandir" width="16" height="16" />
            </button>

            {open && (
              <div className="dropdown-menu" role="menu" style={{ width: menuWidth }}>
                <div className="dropdown-item" role="menuitem" onClick={handleLogout}>Cerrar sesión</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}
