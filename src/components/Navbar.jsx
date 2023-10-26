import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {cartList} = useSelector(state=>state.carts)

  const totalCartCount = cartList.reduce((acc,value)=> acc += value.count,0);
  console.log(totalCartCount,"=total")
  
  const [isBouncing, setIsBouncing] = useState(false);


  
  useEffect(() => {
    if (cartList.length > 0) {
      // Trigger the bouncing animation when the cart updates
      setIsBouncing(true);

      // Reset the bouncing animation after a short delay
      const resetBounce = setTimeout(() => {
        setIsBouncing(false);
      }, 1000); // Adjust the duration as needed

      return () => {
        clearTimeout(resetBounce);
      };
    }
  }, [cartList]);

  return (
    <div className='navbar'>
      <div>
        <h1 className='title'>E-commerce</h1>
      </div>
      <div className='menubar'>
        <div className={`cartIcon ${isBouncing ? 'bounce' : ''}`}>
           <div className='cart-Count'>{totalCartCount}</div>
        <Link to={'cartPage'}> <FontAwesomeIcon icon="fa-solid fa-cart-shopping" className='ShopIcon'/> </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
