import React, { Component } from 'react';
import basic from '../img/basic.png';





// React component for the front side of the card
export class CardFrontS extends Component {
  render() {
    return (
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgS" src={basic} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h3>Database</h3>

              <p>
                <ul>
                  <li> SQL Database Management .</li>
                  <li>
                  Coach : Emad Jalp .
                  </li>
                  <li>The number of training hours : 100h </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontS 
