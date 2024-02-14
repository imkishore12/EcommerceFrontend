import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { store } from '../Store/CreateStore';

function Mobiles(props) {
    // const [arr]=useContext(store);
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
        
        <div className='container'>
        <h1>Mobiles</h1><hr></hr>
        <div className='containercards'>
        
        {/* <p><hr /></p> */}
           
            {
                
                arr.filter((data)=>data.category==="Mobile").map((ele,index) =>{
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
  
        </div>
        </>
    );
}

export default Mobiles;