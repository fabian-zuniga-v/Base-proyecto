import React from 'react'

export default function Home(){
  return (
    <main className="p-[20px]">
      <div className="mb-[32px]">
        <h1 className="w-[1044px] min-w-[155.5px] h-[36px] font-['Roboto_Slab',serif] font-semibold text-[24px] leading-[36px] text-[#0051A8] m-0">Instituciones de salud</h1>
      </div>

      <div className="grid gap-[24px]" style={{ gridTemplateColumns: 'repeat(auto-fit, 332px)' }}>

        <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[12px]">
          <div className="p-[24px] flex flex-col items-center w-full">
            <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-[8px] text-center">Panel de abastecimiento</h3>
            <p className="text-[14px] text-[#666666] text-center mb-[16px]">Descripción Lorem Ipsum</p>
          </div>
        </div>

        <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[12px]">
          <div className="p-[24px] flex flex-col items-center w-full">
            <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3" stroke="#00135A" strokeWidth="2"/>
                <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="#00135A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-[8px] text-center">Gestión Administrativa</h3>
            <p className="text-[14px] text-[#666666] text-center mb-[16px]">Descripción Lorem Ipsum</p>
            <div className="mt-auto flex flex-col items-center gap-[8px]">
              <div className="flex items-center gap-[8px]">
                <span className="text-[32px] font-bold text-[#1A1A1A]">25</span>
                <span className="px-[12px] py-[4px] bg-[#4CAF50] text-white rounded-[16px] text-[12px] font-medium">Entregado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[12px]">
          <div className="p-[24px] flex flex-col items-center w-full">
            <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11L12 14L22 4" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-[8px] text-center">Reportes de cumplimiento</h3>
            <p className="text-[14px] text-[#666666] text-center mb-[16px]">Descripción Lorem Ipsum</p>
          </div>
        </div>

        <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[12px]">
          <div className="p-[24px] flex flex-col items-center w-full">
            <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14 2V8H20" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-[8px] text-center">Manuales y Documentación</h3>
            <p className="text-[14px] text-[#666666] text-center mb-[16px]">Descripción Lorem Ipsum</p>
          </div>
        </div>

        <div className="box-border flex flex-col items-center p-0 w-[332px] h-[344px] min-h-[88px] bg-[#FFFFFF] border border-[#CCCCCC] rounded-[12px]">
          <div className="p-[24px] flex flex-col items-center w-full">
            <div className="w-[48px] h-[48px] mb-[16px] flex items-center justify-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="#00135A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[18px] font-semibold text-[#1A1A1A] mb-[8px] text-center">Usuarios y Permisos</h3>
            <p className="text-[14px] text-[#666666] text-center mb-[16px]">Descripción Lorem Ipsum</p>
          </div>
        </div>

      </div>
    </main>
  )
}
