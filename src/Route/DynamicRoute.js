import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
// import { store } from '../Store/CreateStore';
import { useNavigate } from 'react-router-dom';
import profile from '../profile.png'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/blogSlice';
import 'react-toastify/dist/ReactToastify.css'
// import addToCart from '../Components/AddToCart';
function DynamicRoute(props) {
    const[arr,setArr]=useState([])
    const navi=useNavigate();
    const id=useParams().id;
    const tempdata = useSelector(state => state.blog.blogs);
    const dispatch = useDispatch();
    useEffect(()=>{
        axios.get('https://ecommercebackend-7m3i.onrender.com/products')
        .then((response)=>setArr(response.data))
        .catch((err)=>console.log(err))
      },[])
     
      const token = localStorage.getItem('token');
      const showToastMessage = () => {
        alert("Item Saved Succesfully !!");
      };
    
      const handleClick=(itemId)=>{
        dispatch(addToCart(itemId));
        console.log(itemId);
        // toast("Item Saved Succesfully !!")
        if(token){

            showToastMessage()
        }
        else{
            alert("please login to access the cart")
        }
      }
    var count=0;
    return (
        <div>
            {arr.filter((data)=>data.id==id).map((item)=>{
                return(
                    <>
                    <div className='suggestedContainer'>
                    <div className='suggestedCardContainer'>
                    
                    <Link to={`/details/${item.id}` } style={{textDecoration:'none'}}>
                    <h1>{item.Device}</h1>
                    {/* <div style={{display:'flex',border:'2px solid black',alignItems:'center',justifyContent:'space-between',padding:'10px'}}> */}
                    {/* <div style={{display:'flex' ,gap:'12px'}}>
                                <img src={profile} style={{width:'60px',height:'60px'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h2 style={{padding:'0px',margin:'0px'}}>sai kishore</h2> 
                                    <p style={{padding:'0px',margin:'0px',fontSize:'14px'}}>Oct 29th</p>
                                </div>
                               
                    </div> */}
                    {/* <div style={{fontSize:'26px'}}>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-square-twitter"></i>
                                <i class="fa-brands fa-youtube"></i>
                                </div> */}
                    {/* </div><br></br> */}
                    <div className='displaydynamiccompo'>
                    <img src={item.Image} style={{width:'60%',height:'40vh' }}/>
                    <div style={{display:'flex', flexDirection:'column' ,gap:'1px'}}>
                    <h2>Price: ₹{item.sellingPrice}</h2>
                    <p>MRP : <stirke style={{textDecoration: 'line-through'}}>₹{item.Price}</stirke></p>
                    <h2>Storage:{item.storage}</h2>
                    <p>offers:5%FlipKart axis credit card</p>
                    <p>5% ICICI axis credit card</p>
                    </div>
                    </div>
                    </Link>
                    <h3>Specifications:</h3>
                    <p style={{color:'black',fontSize:'13px'}}>{item.Description.slice(0,350)}</p>
                    </div>
                    {/* <div style={{display:'flex' ,gap:'12px'}}>
                                <img src={profile} style={{width:'60px',height:'60px'}}/>
                                <div style={{display:'flex',flexDirection:'column'}}>
                                    <h2 style={{padding:'0px',margin:'0px'}}>sai kishore</h2> 
                                    <p style={{padding:'0px',margin:'0px',fontSize:'14px'}}>Oct 29th</p>
                                </div>
                               
                    </div> */}
                   {/* <button onClick={(e)=>navi(-1)} className='button-86'>Add Cart</button> */}
                   {
                    console.log(item.id)
                   }
                   {
                   <Link to='/cart'><button onClick={()=>{handleClick(item.id)} }className='button-86'>Add Cart</button></Link>
                   }
                   </div>
                   <h1 style={{marginLeft:'20px'}}>Related Search...</h1>
                    <div className='moresuggestscard'>
                    {arr.filter((data)=>data.id!=id && data.category==`${item.category}` ).map((item)=>{
                        if(count<=4){
                        return(
                            <>      
                             <Link to={`/details/${item.id}`} style={{textDecoration:'none'}}>                 
                            <div className='card'>
                            <img src={item.Image}  style={{width:'100%',height:'50%'}}/>
                            <hr></hr>
                            <h3 style={{padding:'2px 16px'}}>{item.Device.slice(0,60)}...</h3>
                           
                            </div>
                            <p style={{display:'none'}}>{count++}</p>
                            </Link>     
                            
                            </>

                        )
                        }
                    })}
<ToastContainer />
                    </div>
                    
                    
                    </>
                    )
            })}
        </div>
    );
}

export default DynamicRoute;