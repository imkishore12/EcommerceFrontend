import axios from 'axios';
import React, {  useEffect, useState } from 'react';
// import { store } from '../Store/CreateStore';
import { Link} from 'react-router-dom';
function Laptops(props) {
    // const [arr]=useContext(store)
    const[arr,setArr]=useState([])
  useEffect(()=>{
    axios.get('https://ecommercebackend-7m3i.onrender.com/products')
    .then((response)=>setArr(response.data))
    .catch((err)=>console.log(err))
  },[])
  console.log(arr)
    var topHolly = arr.filter((data)=>data.category==="Laptop").map((ele,index)=>{return ele})
  

    
   
    return (
        <>
        <div className='container'>
        <h1>Laptops</h1>
        <p><hr /></p>
        <div className='containercards'>
           
            {
                
                arr.filter((data)=>data.category==="Laptop").map((ele,index) =>{
                    return(
                    <>
                      <Link to={`/details/${ele.id}`} style={{textDecoration:'none'}}>
                    <div className='innercards'>
                    
                    
                    <div>
                    <img src={ele.Image} className='img' />
                    </div>
                    <div style={{padding:'10px'}}>
                    <h2>{ele.Device}</h2>
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


export default Laptops;