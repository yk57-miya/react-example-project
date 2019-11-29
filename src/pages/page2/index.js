import React, { Component } from 'react';

export default class Page2 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Page2';
  }
  render () {
    return (
      <div>
        { this.str }
      </div>
    );
  }
}