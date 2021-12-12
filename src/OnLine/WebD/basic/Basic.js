import React, { Component } from 'react'
import './Basic.css'

import { CardBack } from '../CardBack'
import { CardFrontS } from './CardFrontS'

export class Basic extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontS />
            </div>
          </div>
        )
    }
}

export default Basic
