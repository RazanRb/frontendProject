import React, { Component } from 'react';
import P from '../imgs/python.png';





// React component for the front side of the card
export class CardFrontP extends Component {

  render() {
    return (

        
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgP" src={P} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h1 className="h1P">Python</h1>

              <p> 
                <ul>
                  <li>Python is a general purpose language .</li>
                  <li>
                  Coach : Nadia Henna .
                  </li>
                  <li>The number of training hours : 160h </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontP

