import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';
import Carousels from './Carousel';
import CarouselPage from './Carousel';
const Home = () => {
    const navigate= useNavigate()

    const handleClick=()=>{
        localStorage.removeItem('token');
        navigate('/login')


    }
    const[arr,setArr]=useState([])
    useEffect(()=>{
      axios.get('https://ecommercebackend-7m3i.onrender.com/products')
      .then((response)=>setArr(response.data))
      .catch((err)=>console.log(err))
    },[])
    console.log(arr)
      var topFittness = arr.filter((data)=>data.category==="Mobile").map((ele,index)=>{return ele})
      var count=1;
  
      console.log(arr)
  return (
    <>
    <div>Home</div>
    <Carousels/>
    {/* {
      alert('Welcome')
    } */}
   
    <div className='container'>
        <h1>Latest Mobiles Deals</h1><hr></hr>
        <div className='containercards'>
        
        {/* <p><hr /></p> */}
           
            {
                
                arr.filter((data)=>data.category==="Mobile" &&data.id<4).map((ele,index) =>{
                    return(
                    <>
                   
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div className='innercards'>
                    
                    
                    <div>
                    <img src={ele.Image} className='img' />
                    </div>
                    <hr style={{color:'black',width:'100%'}}/>
                    <div >
                    <h2>{ele.Device.slice(0,10)}...</h2>
                    {/* <p style={{color:'black'}}>{ele.Description.slice(0,150)}...</p> */}
                    </div>
                    
                    
                    
                    
                    </div>
                    
                    </Link>
                    
                    
                    </>
                  
                    )
                })
            }
            
        </div>
        <center>
        <Link to='/mobiles'>see more</Link>
        </center>
  
        </div>
        <div className='container'>
        <h1>Laptop Deals</h1><hr></hr>
        <div className='containercards'>
        
        {/* <p><hr /></p> */}
           
            {
                
                arr.filter((data)=>data.category==="Laptop" &&data.id>20 &data.id<25).map((ele,index) =>{
                    return(
                    <>
                   
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div className='innercards'>
                    
                    
                    <div>
                    <img src={ele.Image} className='img' />
                    </div>
                    <hr style={{color:'black',width:'100%'}}/>
                    <div >
                    <h2>{ele.Device.slice(0,10)}...</h2>
                    {/* <p style={{color:'black'}}>{ele.Description.slice(0,150)}...</p> */}
                    </div>
                    
                    
                    
                    
                    </div>
                    
                    </Link>
                    
                    
                    </>
                  
                    )
                })
            }
            
        </div>
        <center>
        <Link to='/laptops'>see more</Link>
        </center>
  
        </div>
    </>
  )
}

export default Home