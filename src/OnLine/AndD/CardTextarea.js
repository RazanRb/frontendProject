  // React component for textarea
 
  import React, { Component } from 'react';
 
  class CardTextarea extends Component {
    render() {
      return(
        <fieldset>
          <textarea name={this.props.name} id={this.props.id} placeholder={this.props.placeholder} required ></textarea>
        </fieldset>
      )
    }
  }
  export default CardTextarea