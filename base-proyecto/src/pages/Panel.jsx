import React from 'react'
import './breadcrumb.css'

export default function Panel(){
  return (
    <div className="page-root">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="crumb-home"><img src="/iconBreadcrumb.svg" alt="home"/></div>
        <div className="crumb-item"><span className="crumb-text">Inicio</span></div>
        <div className="chev"><img src="/iconBreadcrumbArrow.svg" alt=">"/></div>
        <div className="crumb-item"><span className="crumb-text--current">Panel</span></div>
      </nav>
      <h1 className="page-title">Panel</h1>
    </div>
  )
}
