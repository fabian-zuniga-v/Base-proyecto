import React from 'react'
import './breadcrumb.css'

export default function Inicio(){
  return (
    <div className="page-root">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="crumb-home"><img src="/iconBreadcrumb.svg" alt="home"/></div>
        <div className="crumb-item"><span className="crumb-text--current">Inicio</span></div>
      </nav>
      <h1 className="page-title">Inicio</h1>
    </div>
  )
}
