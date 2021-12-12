import React, { Component } from 'react';
import front from '../img/frontend.png';
import './Frontend.css'





// React component for the front side of the card
export class CardFrontF extends Component {
  render() {
    return (
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgF" src={front} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h3>Frontend</h3>
<p>
              <ul>
                  <li> HTML5 ,</li>
                  <li>   CSS3 (SASS too),</li>
                  <li> JavaScript.</li>
                  <li>
                  Coach : Aml Alhomsi .
                  </li>
                  <li>The number of training hours : 120h </li>
                </ul>
                </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontF