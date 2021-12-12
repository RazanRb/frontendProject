import React, { Component } from 'react';
import M from '../imgs/math.png';





// React component for the front side of the card
export class CardFrontM extends Component {

  render() {
    return (

        
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgA" src={M} />
            </div>

            <div className='col-md-6 side-front-content'>


              <h1 className="h1A">Mathmatics</h1>


              <p> 
                <ul>
                  <li> The basics of learning artificial intelligence. </li>
                  <li>
                  Coach : Bushra Alhaffi.
                  </li>
                  <li>The number of training hours : 80h </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFrontM

