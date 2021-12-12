import React, { Component } from 'react';
import C from '../imgs/C.png';
import './C.css'





// React component for the front side of the card
export class CardFrontC extends Component {

  render() {
    return (

        
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgC" src={C} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h1>C++</h1>

              <p> 
                <ul>
                  <li> It has been used to create: games .</li>
                  <li>
                  Coach : Ahmad Yaseen .
                  </li>
                  <li>The number of training hours : 110h </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontC
