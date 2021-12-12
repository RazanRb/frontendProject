

import React, { Component } from 'react';

// React component for form inputs
export class CardInput extends Component {
  render() {
    return (
      <fieldset>
        <input name={this.props.name} id={this.props.id} type={this.props.type || 'text'} placeholder={this.props.placeholder} required />
      </fieldset>
    );
  }
}

export default CardInput