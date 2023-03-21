import React,{useContext} from 'react'
import { ShopContext } from '../context';
const CartItem = props => {
     const { id, productName, price } = props.product;
     const {cartItems,removeCart,addCart } = useContext(ShopContext)
  return (
    <div className='cart-items'>
      <div className="cart-desc">
      <h3>{productName}</h3>
      <p>Price:{price}$</p>
      </div>
      <div>
        <button onClick={()=>removeCart(id)}>-</button>
        <input value={cartItems[id]} />
        <button onClick={()=>addCart(id)} >+</button>
      </div>
    </div>
  )
}

export default CartItem
