import React, { useState, useEffect } from 'react'
import axios from 'axios';
// import Cart from './Cart';
import { useSelector } from 'react-redux';
import CartButtons from './CartButtons';

const Productlist = () => {

  const { cartList } = useSelector((state) => state.carts)
  // console.log(cartList,"in productlist")

  const [searchTerm, setSearch] = useState([])

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setSearch(searchQuery);
  };

  //creating a state to store api called data
  const [data, setData] = useState([]);
  //creating a cart state to update cart data

  useEffect(() => {

    // Retrieve data from local storage
    const storedData = JSON.parse(localStorage.getItem('myData'));

    // Check if the data exists in local storage
    if (storedData) {
      setData(storedData);
    }

    // Storing url into a variable for calling it using axios
    const apiUrl = 'https://fakestoreapi.com/products?sort=desc';

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);

        // Save the fetched data to local storage
        localStorage.setItem('myData', JSON.stringify(response.data));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [])



  const maxLenghth = 18;  //It is for product text length
  const maxLength2 = 40; //It is for product description length



  return (
    <div className='wrapper'>
      <input type="text" className='search-box' placeholder='🔍 Search' value={searchTerm} onChange={handleSearch} />


      <div className='container'>


        <div className='row'>

          {data.filter((items) => {
            if (searchTerm == "") {
              return items;
            } else if (items.title.toLowerCase().includes(searchTerm.toLowerCase())) {
              return items;
            }
          }).map((items, index) => (
            <div key={index} className='post'>

              <img className='postImage' src={items.image} alt="error to load" />
              <h1 className='product_name' >{items.title.length <= maxLenghth ? items.title : items.title.slice(0, maxLenghth)} ...</h1>
              <p className='product_description'>{items.description.length <= maxLength2 ? items.description : items.description.slice(0, maxLength2)} ...</p>
              <p className='price'>$ {Math.floor(items.price)}</p>
              <p className='rating'>⭐{items.rating.rate}/{items.rating.count}</p>
              <CartButtons items={items} />


            </div>
          ))}
        </div>


      </div>
    </div>
  )
}

export default Productlist
