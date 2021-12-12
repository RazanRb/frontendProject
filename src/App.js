import React, { Component , Fragment} from 'react'
import {BrowserRouter , Link, NavLink,Routes,Router,Route} from 'react-router-dom'


//Components

import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import About from './About/About'
import Footer from './Footer/Footer'
import OnLine from './OnLine/OnLine'




 const App =() => {

    return (

        <BrowserRouter>
              
                <Navbar/>

                <Routes>

                <Route path="/" element={<Home/>}  />
                <Route path="/About" element={<About/>}  />
                <Route path="/OnLine" element={<OnLine/>}  />


                </Routes>

                <Footer />

         </BrowserRouter>

    );

    };



export default App

