import React, { Component } from 'react'
import './Java.css'

import { CardBack } from '../CardBack'
import { CardFrontJ } from './CardFrontJ'

export class Java extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontJ />
            </div>
          </div>
        )
    }
}

export default Java
