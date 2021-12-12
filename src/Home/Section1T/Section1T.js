import React, { Component } from 'react'
import './Section1T.css'
import Python from './img/python.png'
import Front from './img/Front.png'
import AI from './img/ai.png'
import {Col ,Row ,Container} from 'reactstrap'





export class Section1T extends Component {
    render() {
        return (

            <div className="Body">
            <div className="container">

                 <Row>

                     {/* Titel */}
                    <h1 className="text-center"><span> Our most popular courses </span>Created with <i class="fa fa-heart"></i> from<a href="http://grafreez.com"> Grafreez.com</a></h1>
                
                     {/* CARDS */}


                     {/* Card 1 */}
                    <div className="card">

                                <div className="face face1">
                                    <div className="content">
                                        <img src={AI}/>
                                        <h3>Artificial Intelligence</h3>
                                    </div>
                                </div>

                                <div className="face face2">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                                <button className='random-btn' onClick>
                                        Get start
                                    </button>
                                    </div>
                                </div>
                    </div>


                     {/* Card 2 */}

                    <div className="card">

                                <div className="face face1">
                                    <div className="content">
                                        <img src={Python}/>
                                        <h3>PYTHON</h3>
                                    </div>
                                </div>


                                <div className="face face2">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                        <button className='random-btn' onClick>
                                        Get start
                                    </button>
                                    </div>
                                </div>

                    </div>



                     {/* Card 3 */}

                    <div className="card">
                                <div className="face face1">
                                    <div className="content">
                                        <img src={Front}/>
                                        <h3>FrontEnd</h3>
                                    </div>
                                </div>

                                
                                <div className="face face2">
                                    <div className="content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                        <button className='random-btn' onClick>
                                        Get start
                                    </button>

                                    </div>
                                </div>
                    </div>

                </Row>

            </div>
            </div>
          
        )
    }
}

export default Section1T
