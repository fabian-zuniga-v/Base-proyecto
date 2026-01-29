import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header({ userName = 'Nombre Apellido', userSub = '', userEmail = '' }){
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    function handleDocClick(e){
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('click', handleDocClick)
    return () => document.removeEventListener('click', handleDocClick)
  }, [])

  function handleLogout(){
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
    <header className="bg-[#00135A] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] h-[60px] flex items-center w-full z-[100] fixed top-0 left-0 right-0 overflow-visible">
      <div className="w-full flex items-center justify-between px-[24px] py-[12px] gap-[40px] overflow-visible">
        <div className="flex items-center gap-[16px] h-[60px]">
          <div className="flex items-center h-[60px]">
            <Link to="/">
              <img src="/Logo Cenabast.svg" alt="Cenabast" width="137" height="30" className="w-[137px] h-[30px] object-contain block" />
            </Link>
          </div>
          <div className="flex items-center justify-center px-[16px] py-[2px] gap-[10px] w-[190px] h-[28px] bg-[#E8F5E9] rounded-full">
            <div className="w-[158px] h-[24px] font-[Roboto,Inter,sans-serif] font-semibold text-[16px] leading-[24px] text-[#1A1A1A]">Nombre del sistema</div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center max-[900px]:static max-[900px]:transform-none max-[900px]:left-auto max-[900px]:top-auto max-[900px]:w-full max-[900px]:justify-center max-[900px]:px-[8px] max-[900px]:py-[16px]">
          <div className="flex items-center gap-[8px] min-w-0 max-[900px]:w-full max-[900px]:max-w-full max-[900px]:gap-[8px]">
            <div className="w-[clamp(200px,45vw,647px)] flex items-center px-[12px] py-[8px] gap-[8px] bg-[#FFFFFF] border border-[rgba(0,0,0,0.87)] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] h-[36px] box-border flex-1 min-w-0 max-[900px]:w-full max-[900px]:max-w-none">
              <svg className="mr-[6px]" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 21l-4.35-4.35" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="11" cy="11" r="6" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <input placeholder="Buscar" className="flex-1 min-w-0 w-full border-0 outline-none font-[Roboto,Inter,sans-serif] text-[14px] text-[#666666] max-[900px]:text-[14px]" />
            </div>
            <button className="w-[68px] bg-[#00135A] text-[#FFFFFF] px-[12px] py-[8px] border-0 shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_rgba(16,24,40,0.1)] h-[36px] flex items-center justify-center cursor-pointer rounded-[6px] transition-[background_.12s_ease,transform_.06s_ease] hover:bg-[#002060] active:translate-y-[1px] focus-visible:outline-[2px] focus-visible:outline-[rgba(0,81,168,0.2)] focus-visible:outline-offset-[2px] max-[900px]:w-[84px] max-[900px]:min-w-[84px]">Buscar</button>
          </div>
        </div>

        <div className="box-border flex flex-row items-center pl-[16px] gap-[12px] h-[36px] w-[260px] border-l border-[#CCCCCC] max-[900px]:border-l-0 max-[900px]:pl-0 overflow-visible">
          <div className="flex flex-row items-center p-0 gap-[8px] h-[36px] w-[192px]">
            <div className="flex flex-col justify-center items-center p-0 w-[32px] h-[32px] bg-[#00135A] rounded-full text-[#FFFFFF] font-[Inter,Roboto,sans-serif] font-medium">
              <span className="w-[21px] h-[20px] font-[Inter] font-medium text-[14px] leading-[20px] text-center text-[#FFFFFF]">{initials}</span>
            </div>
            <div className="flex flex-col items-start p-0 w-[112px] h-[36px]">
              <div className="w-[112px] h-[20px] font-[Inter] font-medium text-[14px] leading-[20px] text-[#FFFFFF] whitespace-nowrap overflow-hidden text-ellipsis">{userName}</div>
              {userEmail ? <div className="w-[107px] h-[16px] font-[Roboto] font-normal text-[12px] leading-[16px] text-[#FFFFFF] whitespace-nowrap overflow-hidden text-ellipsis">{userEmail}</div> : null}
            </div>
          </div>

          <div className="relative ml-auto overflow-visible" ref={menuRef}>
            <button 
              className="flex flex-row justify-center items-center p-0 w-[36px] h-[36px] rounded-full bg-transparent border-0 text-[#FFFFFF] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition-colors" 
              onClick={(e)=>{e.stopPropagation(); setOpen(v=>!v)}}
              aria-label="Menú de usuario"
              aria-expanded={open}
            >
              <img src="/iconButton.svg" alt="Abrir menú" width="16" height="16" className="!w-[16px] !h-[16px] !max-w-[16px] !max-h-[16px] block" />
            </button>

            {open && (
              <div className="fixed right-[24px] top-[60px] bg-white rounded-[8px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] w-[180px] py-[8px] z-[9999]">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-[16px] py-[10px] text-[#1A1A1A] font-[Inter,Roboto,sans-serif] font-medium text-[14px] leading-[20px] hover:bg-[#00135A] hover:text-white transition-colors cursor-pointer border-0 bg-transparent block"
                >
                  Cerrar sesión
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
    
    </>
  )
}
