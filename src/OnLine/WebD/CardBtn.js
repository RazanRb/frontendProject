import React, { Component } from 'react';

// React component for form button
export class CardBtn extends Component {
  render() {
    return (
      <fieldset>
        <button className={this.props.className} type={this.props.type} value={this.props.value}>{this.props.value}</button>
      </fieldset>
    );
  }
}

export default CardBtn