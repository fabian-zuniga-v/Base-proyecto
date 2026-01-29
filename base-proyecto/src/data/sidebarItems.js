export const SIDEBAR_ITEMS = [
  { type: 'item', label: 'Inicio', icon: '/iconHome.svg' },
  { type: 'dropdown', label: 'Panel de abastecimiento', icon: '/iconPanel.svg', children: ['Programación anual','Pedido especiales','Solicitudes anteriores','Ayuda'] },
  { type: 'dropdown', label: 'Gestion Administrativa', icon: '/iconSettings.svg', children: ['Ordenes','Documentos Tributarios','Resoluciones','Bitácora'] },
  { type: 'item', label: 'Reportes de cumplimiento', icon: '/iconReportes.svg' },
  { type: 'item', label: 'Manuales y Documentación', icon: '/iconManual.svg' }
]
