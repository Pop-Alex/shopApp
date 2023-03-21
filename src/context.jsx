import React, { createContext, useState } from 'react'
import {data} from './data'
export const ShopContext = createContext()

const getCart = ()=>{
        let cart =  {};
        for(let i =1;i<data.length +1;i++){
            cart[i]=0;        
        }
        return cart;
    }

 export const ContextProvider = ({children}) => {
    const [cartItems,seCarttItems] = useState(getCart())
    const [show,setShow] = useState(false)

    
    const handleShow = ()=>{
        setShow(!show)
    }
    const addCart = (itemId)=>{
        seCarttItems((prev)=>({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeCart = (itemId)=>{
        seCarttItems((prev)=>({...prev, [itemId]: prev[itemId] - 1}))
    }

   const amount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

    const contextValue = {
        handleShow,
        addCart,
        removeCart,
        cartItems,
        seCarttItems,
        show,
        setShow,
        amount,
    }
  return (
    <ShopContext.Provider value={
        contextValue
    } >
      {children}
    </ShopContext.Provider>
  )
}


