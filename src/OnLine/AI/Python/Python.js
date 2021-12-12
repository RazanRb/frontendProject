import React, { Component } from 'react'
import './Python.css'

import { CardBack } from '../CardBack'
import { CardFrontP } from './CardFrontP'

export class Python extends Component {
    render() {
        return (
            <div className='card-container'>
            <div className='card-body'>
              <CardBack />
              <CardFrontP />
            </div>
          </div>
        )
    }
}

export default Python
