import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { SIDEBAR_ITEMS } from '../data/sidebarItems'

function slugify(input){
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s-]/g,'')
    .trim()
    .replace(/\s+/g,'-')
}

const PATH_OVERRIDES = {
  'Inicio': '/',
  'Manuales y Documentación': '/manuales',
  'Manuales': '/manuales',
}

function SidebarItem({ icon, label, to }){
  return (
    <Link to={to} className="sidebar-item">
      <div className="item-icon">{icon}</div>
      <div className="item-label">{label}</div>
    </Link>
  )
}

function Dropdown({ icon, label, children }){
  const [open, setOpen] = useState(false)
  return (
    <div className="sidebar-dropdown">
      <div className="dropdown-parent" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <div className="item-icon">{icon}</div>
        <div className="item-label">{label}</div>
        <div className={`chev ${open ? 'open' : ''}`}>
          <img src="/iconSideButton.svg" alt={open ? "collapse" : "expand"} width="16" height="16" />
        </div>
      </div>
      {open && <div className="dropdown-children">{children}</div>}
    </div>
  )
}

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="sidebar-group">
        <div className="items-list">
          {SIDEBAR_ITEMS.map((it, idx) => {
            if(it.type === 'item'){
              // map labels to routes, remove accents and produce kebab-case
              const to = PATH_OVERRIDES[it.label] || ('/' + slugify(it.label))
              return <SidebarItem key={idx} icon={<img src={it.icon} alt={it.label} width="16" height="16" />} label={it.label} to={to} />
            }
            if(it.type === 'dropdown') return (
              <Dropdown key={idx} icon={<img src={it.icon} alt={it.label} width="16" height="16" />} label={it.label}>
                {it.children.map((c,ci)=> {
                  const slug = slugify(c)
                  return <Link key={ci} to={`/gestion/${slug}`} className="dropdown-child">{c}</Link>
                })}
              </Dropdown>
            )
            return null
          })}
        </div>
      </div>
    </aside>
  )
}
