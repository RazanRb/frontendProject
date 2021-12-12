import React, { Component } from 'react'
import './C.css'

import { CardBack } from '../CardBack'
import { CardFrontC } from './CardFrontC'

export class C extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontC />
            </div>
          </div>
        )
    }
}

export default C
