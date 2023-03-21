import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context'
import './sidebarStyle.css'

const Sidebar = () => {
    const {show} = useContext(ShopContext)
  return (
    <div className={`${show ? 'sidebar show-sidebar ': 'sidebar'}`}>
        <div className="sidebar-content">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Sidebar
