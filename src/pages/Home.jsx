import React,{useContext, useState} from 'react'
import './stylePages.css'
import {data} from '../data'
import Producs from './Producs.jsx'
import { ShopContext } from '../context';
import Pagination from './Pagination';
const Home = () => {
  const {search } = useContext(ShopContext)
  const [currentPage,setCurentPage] = useState(1)
  const [postPerPage,setPostPerPage] = useState(6)

  const lastPost = currentPage * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentPost = data.slice(firstPost,lastPost)

  return (
   
    <div className='home'>
      <div className="title-home">
        <h1>Shop</h1>
      </div>
      <Pagination postPerPage={postPerPage} total={data.length} setCurentPage={setCurentPage}/>
      <div className="products">
      {currentPost.filter((filt)=>{
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
