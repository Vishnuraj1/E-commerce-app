import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/ReduxCart'

const BeforeCart = ({items}) => {
  // console.log(item,"incart")
  const dispatch = useDispatch()
  return (
    <div className='BeforeCart'> 
       <button className='AddCart_btn' onClick={() => dispatch(addToCart(items))}>Add to cart</button>
    </div>
  )
}

export default BeforeCart
