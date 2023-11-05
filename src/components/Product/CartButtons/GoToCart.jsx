import React from 'react'
import { useNavigate } from 'react-router-dom'


const GoToCart = () => {

    const naviagte = useNavigate()

    const handleClick = () => {
        naviagte('cartPage')
    }
    return (
        <div>
            <button className='AddCart_btn goToCart' onClick={handleClick}>Go to cart</button>
        </div>
    )
}

export default GoToCart
