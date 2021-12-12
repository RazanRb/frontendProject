import React, { Component } from 'react'
import './Frontend.css'
  
  import { CardBack } from '../CardBack'
  import { CardFrontF } from './CardFrontF'
  //img






  
  // React component for the card (main component)
  export class Frontend extends Component {

    

    render() {

      return(
        <div className='card-container'>
          <div className='card-body'>
            <CardBack />
            <CardFrontF />
          </div>
        </div>
        
      )
    }
  }
  
  export default Frontend 
  // Render Card component
  // ReactDOM.render(<Card />, cardContainer);