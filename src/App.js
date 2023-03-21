import React, { Component } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './comp/Navbar'
import Sidebar from './comp/Sidebar';
import About from './pages/About'
import Cart from './pages/Cart'
function App() {
  return (
    <div>
    <Navbar></Navbar>
    
    <div className='row'>
    <Sidebar/>
    
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
        <Route path='/cart' element={<Cart></Cart>}/>
      </Routes>
      </div>
      
    
    </div>
  );
}

export default App;
