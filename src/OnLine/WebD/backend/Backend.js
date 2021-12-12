import React, { Component } from 'react'
import './Backend.css'

import { CardBack } from '../CardBack'
import { CardFrontB } from './CardFrontB'

export class Backend extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontB />
            </div>
          </div>
        )
    }
}

export default Backend
