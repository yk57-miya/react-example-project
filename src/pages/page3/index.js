import React, { Component } from 'react';

export default class Page3 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Page3';
  }
  render () {
    return (
      <div>
        { this.str }
      </div>
    );
  }
}