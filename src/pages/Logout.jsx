import React from 'react'
import './logout.css'

export default function Logout(){
  return (
    <div className="logout-root">
      <div className="logout-frame">
        <div className="logout-check" aria-hidden>
          <img src="/iconCheck.svg" alt="check" />
        </div>
        <h1 className="logout-title">Sesión Cerrada</h1>
        <button className="logout-cta" onClick={()=> window.location.href = '/'}><span className="label">Volver al inicio</span></button>
      </div>
    </div>
  )
}
