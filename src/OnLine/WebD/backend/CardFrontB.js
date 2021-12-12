import React, { Component } from 'react';
import back from '../img/backend.png';





// React component for the front side of the card
export class CardFrontB extends Component {
  render() {
    return (
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="imgB" src={back} />
            </div>

            <div className='col-md-6 side-front-content'>

              <h3>Backend</h3>
<p>
                <ul>
                  <li> Larvel</li>
                  <li> ,PHP  </li>
                  <li>  ,Python .</li>
                  <li>
                  Coach : AbdAllah Majzoub .
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

export default CardFrontB 
