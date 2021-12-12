import React, { Component } from 'react';
import F from '../imgs/Flutter.png';





// React component for the front side of the card
export class CardFrontFl extends Component {

  render() {
    return (

        
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgF" src={F} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h1>Flutter</h1>

              <p> 
                <ul>
                  <li> Flutter makes it easy for designers, developers, entrepreneurs to build mobile apps </li>
                  <li>
                  Coach : Toba Shaheen
                  </li>
                  <li>The number of training hours : 130h </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontFl

