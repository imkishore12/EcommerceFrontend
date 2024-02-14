import axios from 'axios';
import React, {  useEffect, useState } from 'react';
// import { store } from '../Store/CreateStore';
import { Link } from 'react-router-dom';
function Accessories(props) {
    // const [arr]=useContext(store)
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://ecommercebackend-7m3i.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)

    var topBolly = arr.filter((data)=>data.category==="Accessories").map((ele,index)=>{return ele})
    var count=1;
    console.log(topBolly)
    
    return (
        <>
       
        <h1>Accesories</h1>
        <hr></hr>
        <div className='container'>
        <div className='containercards'>
           
        
            {
                
                arr.filter((data)=>data.category==="Accesories").map((ele,index) =>{
                    return(
                    <>
                    <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div className='innercards'>
                    
                    
                    <div>
                    <img src={ele.Image} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{ele.Device.slice(0,20)}</h2>
                    {/* <p style={{color:'black'}}>{ele.Description.slice(0,150)}...</p> */}
                    </div>
                    
                    
                    
                    
                    </div>
                    
                    </Link>
                    
                    </>
                  
                    )
                })
            }
            
        </div>
        
        </div>
        </>
    );
}

export default Accessories;