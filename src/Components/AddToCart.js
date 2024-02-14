// components/AddToCart.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increment, decrement } from '../Redux/blogSlice';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddToCart = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem('token');
    console.log("token:",token)

    if(!token){
      alert("please login to access your cart")
        navigate('/login')
    }
    else{
        axios.get('http://localhost:5000/user/cart', 
        {headers:{
            authorization: `Bearer ${token}`,
        },
    })
    // .then(res=>{
    //     const responseData = res.data;
    //     // alert(responseData.msg)
    //     alert("welcome to dashboard")
    //     // setMessage(responseData.msg)
    //     setMessage("Welcome to dashboard")
    // })
    }

},[navigate])
  const cartItems = useSelector(state => state.blog.cart);
  const dispatch = useDispatch();
  var total = useSelector(state => state.blog.total);
  // total=total.toLocaleString("en-US");
  console.log(total)

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(increment(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrement(itemId));
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className='cart-img'>
              <img src={item.Image} alt={item.name} />
            </div>
            <p>{item.Device}</p>
            <p>Count: {item.count}</p>
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <p>₹ {(item.Price * item.count).toLocaleString("en-US")}</p>
            {console.log(parseInt(item.Price).toLocaleString("en-US"))}
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total">
        <p>Total: ₹ {total.toLocaleString("en-US")}</p>
      </div>
      <div className='payment'>
        <button onClick={()=>{
          if(total==0){
            alert("please add itam to your cart")
          }
          else{
          alert("your order has been done")
          navigate('/home')
        }}}>Check Out</button>
      </div>
    </div>
  );
}

export default AddToCart;