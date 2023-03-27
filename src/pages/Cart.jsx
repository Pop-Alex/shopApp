import React,{useContext} from 'react'
import {data} from '../data'
import { ShopContext } from '../context';
import CartItem from './CartItem';
import {useNavigate} from 'react-router-dom'
const Cart = () => {
  const {cartItems,amount,removeItemsCart } = useContext(ShopContext)
    const navigate = useNavigate();
   const total = amount()
  return (
    <div className='cart'>
      <div className="title-cart">
        <h1>Your cart</h1>
      </div>
      <div className="items-cart">
        {data.map((product)=>{
          if(cartItems[product.id] !== 0 ){
            return <CartItem product={product} />
          }
        })}
      </div>
      
      {total > 0 ? (<div className="check">
        <p>Total :${total} </p>
        <button className='check-btn' onClick={()=>navigate('/')}>Continue shopping</button>
      </div>) : (<p className='empty-cart'>No items in cart</p>) }
      
    </div>
  )
}

export default Cart

