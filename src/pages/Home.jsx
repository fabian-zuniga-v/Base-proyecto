import React, { useEffect, useState } from 'react'
import '../styles.css'
import './home.css'

export default function Home(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <main className="dashboard">
      <div className="dashboard-row">
        <h1 className="dashboard-title">Nombre del sistema</h1>
      </div>

    </main>
  )
}
