import React, { Component } from 'react'
import {BrowserRouter , Link, NavLink,Routes,Router,Route} from 'react-router-dom'

import Carousel from 'react-bootstrap/Carousel'
import img1 from './img/1.jpg'
import img2 from './img/2.png'
import img3 from './img/3.jpg'
import './Header.css' 
// import onLine from '../../onLine/onLine'


export class Header extends Component {


     render() {
   


        return (
            

<div>


                    <Carousel >



                    {/* Carousel.Item 1 */} 

                    <Carousel.Item className="carousel">
                                <img
                                className="d-block w-100 h-100"
                                src={img1}
                                alt="First slide"
                                />


                              <Carousel.Caption>
                                      <div class="label-box BodyT">
                                      <div class="label-front">
                                      Centers
                                      </div>
                                      <div class="label-back">
                                      <span>Information Technology</span>
                                      </div>
                                      </div>
                                      <button className='random-btn btnC' onClick>
                                      Get start
                                      </button>
                              </Carousel.Caption>

                    </Carousel.Item>





                    {/* Carousel.Item 2 */} 

                    <Carousel.Item className="carousel">
                            <img
                            className="d-block w-100 h-90"
                            src={img2}
                            alt="Second slide"

                            />

                            <Carousel.Caption>

                                        <div class="label-box BodyT">
                                        <div class="label-front">
                                        Questions
                                        </div>
                                        <div class="label-back">
                                        <span>Information Technology</span>
                                        </div>
                                        </div>
                                        <button className='random-btn btnC' onClick>
                                        Get start
                                        </button>
                                        
                            </Carousel.Caption>

                    </Carousel.Item>






                     {/* Carousel.Item 3 */} 
                    <Carousel.Item className="carousel">

                            <img
                            className="d-block w-100 h-100"
                            src={img3}
                            alt="Third slide"
                            />

                          <Carousel.Caption>

                                  <div class="label-box BodyT">
                                  <div class="label-front">
                                  OnLine
                                  </div>
                                  <div class="label-back">
                                  <span>Information Technology</span>
                                  </div>
                                  </div>

                                  <button className='random-btn btnC' >
                                
                                  Get start
                               
                                  </button>

                          </Carousel.Caption>


                    </Carousel.Item>
                   

                   </Carousel>

                   </div>

   
        )
    
    }
}

export default Header































// componentDidMount () {
    //     axios.get("Js/All.json")
    //     .then (reso => {
    //         this.setState( {carousels: reso.data.carousels
    //         })
    //     })
    // }

    // render() {
        //       const {carousels} = this.state;
        //       const carouselsAvilabl = carousels.map((carousel) => {



        //         return(
                                   
                                
                 
                                     

        //                             )
                            

                                // })