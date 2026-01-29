import React, { useState } from 'react'
import { Link } from 'react-router-dom'
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
    <Link to={to} className="flex flex-row items-center px-[12px] py-[8px] gap-[6px] w-[284px] h-[40px] rounded-[8px] cursor-pointer no-underline">
      <div className="w-[16px] h-[16px]">{icon}</div>
      <div className="flex-1 min-w-0 max-w-[200px] h-[24px] font-[Roboto] !text-[#FFFFFF] text-[16px] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">{label}</div>
    </Link>
  )
}

function Dropdown({ icon, label, children }){
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div className="flex flex-row items-center px-[12px] py-[8px] gap-[6px] w-[284px] h-[40px] rounded-[8px] cursor-pointer" onClick={() => setOpen(v => !v)} aria-expanded={open}>
        <div className="w-[16px] h-[16px]">{icon}</div>
        <div className="flex-1 min-w-0 max-w-[200px] h-[24px] font-[Roboto] !text-[#FFFFFF] text-[16px] leading-[24px] overflow-hidden text-ellipsis whitespace-nowrap">{label}</div>
        <div className="flex items-center ml-[4px]">
          <img src="/iconSideButton.svg" alt={open ? "collapse" : "expand"} width="16" height="16" className={`!w-[16px] !h-[16px] !max-w-[16px] !max-h-[16px] block transition-transform duration-[180ms] ease-in-out ${open ? 'rotate-0' : 'rotate-180'}`} />
        </div>
      </div>
      {open && <div className="flex flex-col items-start pl-[24px] gap-[4px] w-[284px] h-[168px]">{children}</div>}
    </div>
  )
}

export default function Sidebar(){
  return (
    <aside className="box-border flex flex-col items-start py-[16px] px-0 gap-[8px] w-[300px] min-h-screen bg-[#092039] border-r border-[#CCCCCC] fixed left-0 top-[60px] bottom-0">
      <div className="flex flex-col items-start p-[8px] gap-[6px] w-[300px]">
        <div className="flex flex-col items-start p-0 gap-[6px] w-[284px]">
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
                  return <Link key={ci} to={`/gestion/${slug}`} className="flex flex-row items-start px-[12px] py-[8px] gap-[8px] w-[260px] h-[36px] rounded-[8px] !text-[#FFFFFF] font-[Roboto] text-[14px] leading-[20px] no-underline">{c}</Link>
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
