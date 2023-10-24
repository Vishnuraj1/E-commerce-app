import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../../../redux/ReduxCart'

const AfterCart = ({cartCount,itemsId}) => {

  const dispatch = useDispatch()
  return (
    <div className='AfterCart'>
      <button className='Cart-counter-btn' onClick={()=>dispatch(decrement(itemsId))}>-</button>
      <div className='Cart-count'>{cartCount}</div>
      <button className='Cart-counter-btn' onClick={()=>dispatch(increment(itemsId))}>+</button>
    </div>
  )
}

export default AfterCart
