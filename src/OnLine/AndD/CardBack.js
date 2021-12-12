

import React, { Component } from 'react';

import CardInput from './CardInput';
import CardTextarea from "./CardTextarea";
import { CardBtn } from './CardBtn'
import { CardProfileLinks } from './CardProfileLinks'



// React component for the back side of the card
export class CardBack extends Component {
  render() {
    return (
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h1>Let's get in touch!</h1>

          <form formAction='' className='card-form'>
            <div className='row'>
              <div className='col-md-6'>
                <CardInput name='contactFirstName' id='contactFirstName' type='text' placeholder='Your first name' />
              </div>

              <div className='col-md-6'>
                <CardInput name='contactLastName' id='contactLastName' type='text' placeholder='Your last name' />
              </div>
            </div>

            <div className='row'>
              <div className='col-md-6'>
                <CardInput name='contactEmail' id='contactEmail' type='email' placeholder='Your email address' />
              </div>

              <div className='col-md-6'>
                <CardInput name='contactSubject' id='contactSubject' type='text' placeholder='Subject' />
              </div>
            </div>

            <CardTextarea name='contactMessage' id='contactMessage' placeholder='Your message' />

             <CardBtn className='btn btn-primary' type='submit' value='Send' />
          </form>

          <CardProfileLinks />
        </div>
      </div>
    );
  }
}


export default CardBack 