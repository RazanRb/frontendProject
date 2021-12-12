import React, { Component } from 'react';
import J from '../imgs/Java.png';





// React component for the front side of the card
export class CardFrontJ extends Component {

  render() {
    return (

        
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgJ" src={J} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h1>Java</h1>


              <p> 
                <ul>
                <li> It has been used to create: games</li>
                  <li>
                  Coach : Mostafa Husen
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

export default CardFrontJ