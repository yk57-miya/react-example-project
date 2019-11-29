import React, { Component } from 'react';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Page1';
  }
  render () {
    return (
      <div>
        { this.str }
      </div>
    );
  }
}