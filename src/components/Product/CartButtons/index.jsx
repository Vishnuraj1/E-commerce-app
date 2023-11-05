import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';
import GoToCart from './GoToCart';

const CartButtons = ({items}) => {
    
    const {cartList} =useSelector((state)=> state.carts)

    // console.log(items,"kunna");
    
    
    const cartCount = useMemo( ()=>{
          // console.log(cartList,"myr")
         return cartList?.find((item)=>item?.id == items?.id)?.count ;
        },[cartList]);
       
        // console.log(cartCount,"cartcount");
        // <AfterCart itemsId={items?.id} cartCount={cartCount} />
      
  return (
    <div>
       { cartCount > 0 ? <GoToCart/> : <BeforeCart items={items}/> }
    </div>
  )
}

export default CartButtons
