import React from 'react'
import './stylePages.css'
import {data} from '../data'
import Producs from './Producs.jsx'

const Home = () => {
  console.log(data)
  return (
    <div className='home'>
      <div className="title-home">
        <h1>Shop</h1>
      </div>
      <div className="products">
      {data.map((product)=>(
        <Producs product={product}></Producs>
      ))}
      </div>
    </div>
  )
}

export default Home
