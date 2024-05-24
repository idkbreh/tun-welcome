import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <img src={reactLogo} className="logo react spin" alt="React logo" />
      </div>
      <img src="/helloworld.png" width={90} height={100} className="spin"/>
      <div className="card">
        <h1>
          สวัสดีค้าบเบบี้ มาที่นี่ได้ไง
        </h1>
      </div>
      <Link to="/playgame" className="read-the-docs">
        กดตรงนี้ต่อ
      </Link>
    </>
  )
}

export default App
