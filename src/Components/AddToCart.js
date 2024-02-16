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
        axios.get('https://ecommercebackend-7m3i.onrender.com/user/cart', 
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
  var cartItems = useSelector(state => state.blog.cart);
  const dispatch = useDispatch();
  var total = useSelector(state => state.blog.total);
  // total=total.toLocaleString("en-US");
  console.log(total)
  console.log(cartItems)

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
    <div >
      <center><h1>Shopping Cart</h1></center><br></br><br></br>
      <div className="cart-container">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <div className='cart-img'>
              <img src={item.Image} alt={item.name} style={{width:'200px',height:'200px'}}/>
            </div>
            <div>
            <h2 className='devicename'>{item.Device.slice(0,20)}</h2><br></br>
            <div style={{textAlign:'center'}}>
            <button onClick={() => handleDecrement(item.id)} style={{padding:'5px',width:'50%',backgroundColor:'Highlight',fontSize:'15px'}}>-</button>
            <button onClick={() => handleIncrement(item.id)} style={{padding:'5px',width:'50%',backgroundColor:'Highlight',fontSize:'15px'}}>+</button>
            </div><br></br>
            <button onClick={() => handleRemoveFromCart(item.id)} style={{width:'100%',padding:'5px',backgroundColor:'orangered' ,color:'white',fontSize:'20px'}}>Remove</button>

            </div>
            <div className='count'>
            <h2>₹ {(item.Price * item.count).toLocaleString("en-US")}</h2>

<h4>Quantity: {item.count}</h4>
            </div>
            {/* <h2>₹ {(item.Price * item.count).toLocaleString("en-US")}</h2>

            <p>Quantity: {item.count}</p> */}
            {/* <div style={{textAlign:'center'}}>
            <button onClick={() => handleDecrement(item.id)} style={{padding:'5px',width:'50%',backgroundColor:'Highlight',fontSize:'25px'}}>-</button>
            <button onClick={() => handleIncrement(item.id)} style={{padding:'5px',width:'50%',backgroundColor:'Highlight',fontSize:'25px'}}>+</button>
            </div> */}
            {/* <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button> */}
            
            {/* <p>₹ {(item.Price * item.count).toLocaleString("en-US")}</p> */}
            {console.log(parseInt(item.Price).toLocaleString("en-US"))}
            
           
          </div>
          
          ))}
      </div>
          <hr></hr>
      <div className="total">
        <center><h1>Total: ₹ {total.toLocaleString("en-US")}</h1></center>
      </div>
      <div className='payment'>
       <center> <button onClick={()=>{
          if(total==0){
            alert("please add itam to your cart")
          }
          else{
          alert("your order has been done")
          navigate('/home')
          
        }}} className='button-86'>Check Out</button></center>
      </div>
    </div>
    // <div className='small-container cart-page'>
    //   <table>
    //     <tr>
    //       <th>Product</th>
    //       <th>Quantity</th>
    //       <th>subtotal</th>
    //     </tr>
    //     <tr>
    //       <td>
    //         <div className='cart-info'>
    //           <img src="" />
    //           <div>
    //             <p>Red Printer shirt</p>
    //             <small>price</small>
    //             <a href="">remove</a>
    //           </div>

    //         </div>
    //       </td>
    //       <td><button>+</button><button>-</button></td>
    //       <td>$50.00</td>
    //     </tr>
    //   </table>

    // </div>
  );
}

export default AddToCart;