import React, { Component } from 'react'
import './Mathmatics.css'

import { CardBack } from '../CardBack'
import { CardFrontM } from './CardFrontM'

export class Mathmatics extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontM />
            </div>
          </div>
        )
    }
}

export default Mathmatics
