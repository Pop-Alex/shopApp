import React, { useContext } from 'react'
import { ShopContext } from '../context';
const Producs = (props) => {
    const { id, productName, price, productImage } = props.product;
    const {addCart,cartAmountt } = useContext(ShopContext)
  return (
    <div className='product' key={id}>
        <div className="description">
            <p>{productName}</p>
            <p>{price}</p>
        </div>
      <button className='button-product' onClick={()=>addCart(id)}>
        Add to cart 
        </button>
    </div>
  )
}

export default Producs
