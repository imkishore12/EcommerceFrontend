
import { NavLink } from 'react-router-dom';


import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbars extends Component {
    state={
        clicked:false,
        token : localStorage.getItem('token'),
        Logstatus:"Login"
      }
      handleClick=()=>{
       this.setState({...this.state,clicked:!this.state.clicked})
       
        
      }
      // handleLogin=()=>{
      //   if(this.state.token==0){
      //  this.setState({...this.state,Logstatus:"Logout"})
      //   }else{this.setState({...this.state,Logstatus:"Login"})}
       
        
      // }
      
    render() {
        return (
            <>
            
            <header className='Heading'>
         <h1 >E-Store</h1>
         
         <Link to='/cart'><i class="fa-solid fa-cart-shopping fa-2xl"></i></Link>
         
         <Link to='/login'><h2>Login</h2></Link>
         <div id='mobile' onClick={this.handleClick}>
           <i id='bar'className={this.state.clicked ? "fas fa-times"  :"fas fa-bars"}></i>
          
   
         </div>
           
       </header>
  
   <nav className='sticky'>
    
   <ul id='navbar' className={this.state.clicked ? "#navbar active": "#navbar"}>
   <NavLink to='/'><li>Home</li></NavLink>
   <NavLink to='/mobiles'><li>Mobiles</li></NavLink>
   <NavLink to='/laptops'><li>Laptops</li></NavLink>
   {/* <NavLink to='/tvs'><li>Tvs</li></NavLink> */}
   <NavLink to='/tablets'><li>Tablets</li></NavLink>
   <NavLink to='/accessories'><li>Accessories</li></NavLink>
   {/* <NavLink to='/login'><li>Login</li></NavLink>
   <NavLink to='/register'><li>Register</li></NavLink>
   <NavLink to='/dashboard'><li>Dashboard</li></NavLink> */}
   {/* <h1>hii{this.state}</h1> */}
   </ul>
   
   </nav>
   
   </>
        );
    }
}

export default Navbars;

