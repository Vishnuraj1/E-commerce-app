import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import Cart from './Product/Cart';

const Navbar = () => {

  const {cartList} = useSelector(state=>state.carts)

  const totalCartCount = cartList.reduce((acc,value)=> acc += value.count,0);
  console.log(totalCartCount,"=total")
  
  const [isComponentVisible, setComponentVisible] = useState(false)
  const [isBouncing, setIsBouncing] = useState(false);

  const handleIconClick = () => {
    setComponentVisible(!isComponentVisible); // Toggle the visibility state
  };

  
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
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping"  onClick={handleIconClick} />
        </div>
        {isComponentVisible && <Cart Visible={isComponentVisible} setVisible={setComponentVisible}/>}
      </div>
    </div>
  )
}

export default Navbar
