import React, { Component } from 'react'
import './Flutter.css'

import { CardBack } from '../CardBack'
import { CardFrontFl } from './CardFrontFl'

export class Flutter extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontFl />
            </div>
          </div>
        )
    }
}

export default Flutter
