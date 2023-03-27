import React, { useContext } from 'react'
import './navbarStyle.css';
import { BsFillCartFill  } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { ShopContext } from '../context';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const {handleShow,search,setSearch,cartAmount} = useContext(ShopContext)
  return (
    <div className="navbar">
        <div className="navbar-content">
            <div className="navbar-logo">
                <Link style={{ textDecoration: 'none' }} to='/'><h1 className='logo'>Logo</h1></Link>
                <button className='nav-toggle' onClick={()=>handleShow()}><FaBars/></button>
            </div>
            <div className="navbar-input">
                <input type="text" placeholder='type' value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button>Search</button>
            </div>
            <div className="navbar-cart">
                <Link to='cart'>
                <BsFillCartFill />
                <button>Cart</button>
                
                </Link>
                
                <p className='quantity'>{cartAmount.length} </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
