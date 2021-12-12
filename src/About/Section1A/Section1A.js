import React, { Component } from 'react'
import './Section1A.css'
import {Col ,Row ,Container} from 'reactstrap'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

//imgs
import p1 from './imgA1/1.jpg'
import p2 from './imgA1/2.jpg'
import p3 from './imgA1/3.jpg'

export class Section1 extends Component {



    render() {

    

                return (
                    <Container>
                    <Row>

                        {/* Titel */}

                        <h1 className="text-center"><span> Team Founders </span>Created with <i class="fa fa-heart"></i> from<a href="http://grafreez.com"> Grafreez.com</a></h1>
                        

                         {/********* team ********/}



                        {/* card1 */}

                        <div className="col-md-4">
                        <div className="card profile-card-3">

                            <div className="background-block">
                                <img src="" className="background"/>
                            </div>

                            <div className="profile-thumb-block">
                                <img src={p1} alt="profile-image" className="profile"/>
                            </div>

                            <div className="card-content">
                            <h2>RASHA TELLO<small>business manager</small></h2>

                            <div className="icon-block ">     

                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaLinkedin /></a>

                            </div>

                            </div>

                        </div>
                        <p class="mt-3 w-100 float-left text-center"><strong>To connect with here</strong></p>
                        </div>

                  



                        {/* card2 */}

                        <div className="col-md-4">
                        <div className="card profile-card-3">
                            <div className="background-block">
                                <img src=""  className="background"/>
                            </div>
                            <div className="profile-thumb-block">
                                <img src={p2} alt="profile-image" className="profile"/>
                            </div>
                            <div className="card-content">
                            <h2>MOHAMMAD EID<small>Engineer</small></h2>

                            <div className="icon-block">     

                              <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedin /></a>

                              </div>

                            </div>
                        </div>
                        <p class="mt-3 w-100 float-left text-center"><strong>To connect with him</strong></p>
                        </div>





                       {/* card3 */} 

                        <div className="col-md-4">
                        <div className="card profile-card-3">
                            <div className="background-block">
                                <img src=""  className="background"/>
                            </div>
                            <div className="profile-thumb-block">
                                <img src={p3} alt="profile-image" className="profile"/>
                            </div>
                            <div className="card-content">
                            <h2>RAHF MARZOK<small>Engineer</small></h2>
                            <div className="icon-block">

                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaLinkedin /></a>

                                </div>
                            </div>
                        </div>
                        <p class="mt-3 w-100 float-left text-center"><strong>To connect with here</strong></p>
                        </div>
        

                        </Row>
                        </Container>
                          
                )
                }

    
    }


export default Section1



