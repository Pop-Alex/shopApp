import React, { useContext } from 'react'
import { ShopContext } from '../context';
const Producs = (props) => {
    const { id, productName, price, productImage } = props.product;
    const {addCart,cartItems } = useContext(ShopContext)
  return (
    <div className='product' key={id}>
        <div className="description">
            <p>{productName}</p>
            <p>{price}</p>
        </div>
      <button onClick={()=>addCart(id)}>
        Click me {cartItems[id] > 0 && <>({cartItems[id]})</> }
        </button>
    </div>
  )
}

export default Producs
