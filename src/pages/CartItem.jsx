import React,{useContext} from 'react'
import { ShopContext } from '../context';
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'
const CartItem = props => {
     const { id, productName, price } = props.product;
     const {cartItems,removeCart,addCart } = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className="cart-desc">
      <h3>{productName}</h3>
      <p>Price:{price}$</p>
      </div>
      <div className='cart-bttons'>
        <button onClick={()=>removeCart(id)} className='increase-decrease-btn-minus'><AiOutlineMinus/></button>
        <input className ="input-cart" value={cartItems[id]}  />
        <button onClick={()=>addCart(id)} className='increase-decrease-btn-plus' ><AiOutlinePlus/></button>
      
      </div>
    </div>
  )
}

export default CartItem
