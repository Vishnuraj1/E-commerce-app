import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {cartList} = useSelector(state=>state.carts)

  
  const [isBouncing, setIsBouncing] = useState(false);
  
  const [isSticky, setIsSticky] = useState(false);
  
  const totalCartCount = cartList.reduce((acc,value)=> acc += value.count,0);
  console.log(totalCartCount,"=total")

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
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
