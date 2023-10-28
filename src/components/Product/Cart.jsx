import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../redux/ReduxCart'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const [isSticky, setIsSticky] = useState(false);

    const {cartList} = useSelector(state=>state.carts)
    const dispatch = useDispatch();

    const navigate = useNavigate()
    
    const handleIconClick = () => {
      navigate('/')
      };


      useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
          if (window.scrollY > 10) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };
    
            // Add event listener for the scroll event
            window.addEventListener('scroll', handleScroll);
    
            // Clean up the event listener when the component unmounts
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    


  return (
<div className="cartContainer">

    <div className='cart'>
      <div className={`header ${isSticky ? 'sticky' : ''}`}>
      <FontAwesomeIcon icon="fa-solid fa-xmark" beat  className='close-btn'  onClick={handleIconClick}/>
      <h1 className='Cart-name'>Shopping Cart</h1>
      </div>
      <div className='list'>
        {cartList.map((cartItem, index) => (
            <div key={index} className='list-box'>
              <img src={cartItem.image} alt="" className='cartImg'/>
          <p className='cart-title'>{cartItem.title} ... </p>
          <p className='cart-price'>${cartItem.price}</p>
          <button className='remove-btn' onClick={()=> dispatch(removeFromCart(cartItem.id))}>Remove </button>
          </div>
        ))}
      </div>
    </div>
</div>
  )
}

export default Cart
