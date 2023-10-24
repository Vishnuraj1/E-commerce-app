import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/ReduxCart'

const Cart = ({Visible,setVisible}) => {

    const {cartList} = useSelector(state=>state.carts)
    const dispatch = useDispatch();

    const handleIconClick = () => {
        setVisible(!Visible); // Toggle the visibility state
      };

  return (
<div className="cartConatainer">

    <div className='cart'>
      <FontAwesomeIcon icon="fa-solid fa-xmark" beat  className='close-btn'  onClick={handleIconClick}/>
      <h1>Shopping Cart</h1>
      <ul className='list'>
        {cartList.map((cartItem, index) => (
            <div key={index}>
          <li >{cartItem.title} - ${cartItem.price}</li>
          <button onClick={()=> dispatch(removeFromCart(cartItem.id))}>Remove </button>
          </div>
        ))}
      </ul>
    </div>
</div>
  )
}

export default Cart
