import React,{useContext} from 'react'
import './stylePages.css'
import {data} from '../data'
import Producs from './Producs.jsx'
import { ShopContext } from '../context';
const Home = () => {
  const {search } = useContext(ShopContext)
  
  return (
    <div className='home'>
      <div className="title-home">
        <h1>Shop</h1>
      </div>
      <div className="products">
      {data.filter((filt)=>{
        return search.toLocaleLowerCase() === "" ?
        filt : filt.productName.toLocaleLowerCase().includes(search)
      }).map((product)=>(
        <Producs product={product}></Producs>
      ))}
      </div>
    </div>
  )
}

export default Home
