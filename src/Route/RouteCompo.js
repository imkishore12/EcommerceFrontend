// import React from 'react';
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
// import Hollywood from '../Components/Hollywood';
// import Home from '../Components/Home';

// function RouteCompo(props) {
//     return (
//         <div>
//             <BrowserRouter>

//             <Routes>
//                 <Route path='/' element={<Home></Home>} />
//                 <Route path='/hollywood' element={<Hollywood />} />
//             </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }


import React from "react";
import Home from "../Components/Home";
import Bollywood from "../Components/Accessories";
import Hollywood from "../Components/Laptops";
import Technology from "../Components/Tvs";
import Food from "../Components/Tablets";
import Fitness from "../Components/Mobiles";
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import CreateStore from "../Store/CreateStore";
import DynamicRoute from "./DynamicRoute";
import Navbars from "./Navbars";
import Mobiles from "../Components/Mobiles";
import Laptops from "../Components/Laptops";
import Tvs from "../Components/Tvs";
import Tablets from "../Components/Tablets";
import Accessories from "../Components/Accessories";
import AddToCart from "../Components/AddToCart";
import Register from "../Components/Register";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";


function RouteCompo() {
    return(
        <div>
            <BrowserRouter>
            <Navbars/>
          
                       
                <Routes>
                <Route path='/' element={<Home />}></Route>
                
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/mobiles' element={<Mobiles />}></Route>
                <Route path='/laptops' element={<Laptops />}></Route>
                <Route path='/tvs' element={<Tvs />}></Route>
                <Route path='/tablets' element={<Tablets />}></Route>
                <Route path='/accessories' element={<Accessories />}></Route>
                <Route path="/details/:id" element={<DynamicRoute/>}/>
                <Route path="/cart" element={<AddToCart />} />



                
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            </Routes>
           

            </BrowserRouter>
        </div>
    )
}
export default RouteCompo;