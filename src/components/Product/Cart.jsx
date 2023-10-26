import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/ReduxCart'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const {cartList} = useSelector(state=>state.carts)
    const dispatch = useDispatch();

    const navigate = useNavigate()
    
    const handleIconClick = () => {
      navigate('/')
      };


  return (
<div className="cartContainer">

    <div className='cart'>
      <FontAwesomeIcon icon="fa-solid fa-xmark" beat  className='close-btn'  onClick={handleIconClick}/>
      <h1>Shopping Cart</h1>
      <div className='list'>
        {cartList.map((cartItem, index) => (
            <div key={index} className='list-box'>
              <img src={cartItem.image} alt="" className='cartImg'/>
          <p className='cart-title'>{cartItem.title}  </p>
          <p className='cart-price'>${cartItem.price}</p>
          <button onClick={()=> dispatch(removeFromCart(cartItem.id))}>Remove </button>
          </div>
        ))}
      </div>
    </div>
</div>
  )
}

export default Cart
