import React, { useContext } from 'react'
import { ShopContext } from '../context';
import {BsFillCartPlusFill} from 'react-icons/bs';

const Producs = (props) => {
    const { id, productName, price,image } = props.product;
    const {addCart} = useContext(ShopContext)
    
  return (
    <div className='product' key={id}>
      
        <div className="description">
          <img src={image} alt="img" />
          <div className='prod-info'>
            <p>{productName}</p>
            <p>Price:{price}$</p>
          </div>
            
        </div>
        <div className='cart-btn-prod'>
      <button className='button-product' onClick={()=>addCart(id)}>
        <div className='prod-btn'>
          <div className='icon'> <BsFillCartPlusFill/>
        </div>
        <div className='text-btn'>Add to cart </div>
        </div>
      </button>
        </div>

        
    </div>
  )
}

export default Producs
