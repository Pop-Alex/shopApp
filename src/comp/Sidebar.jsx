import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context'
import {BiHomeAlt2} from 'react-icons/bi';
import {FcAbout} from 'react-icons/fc';
import './sidebarStyle.css'

const Sidebar = () => {
    const {show} = useContext(ShopContext)
  return (
    <div className={`${show ? 'sidebar show-sidebar ': 'sidebar'}`}>
        <div className="sidebar-content">
            <Link style={{ textDecoration: 'none'}} className="side-btn" to='/'>
              <div className='link-info'>
              <BiHomeAlt2/>
              <button className="side-btn">Home</button> 
              </div>
              </Link>
            <Link style={{ textDecoration: 'none' ,color: 'green' }} className="side-btn" to='/about'>
              <div className='link-info'>
              <FcAbout/>
              <button className="side-btn">About</button> 
              </div>
              </Link>
        </div>
    </div>
  )
}

export default Sidebar
