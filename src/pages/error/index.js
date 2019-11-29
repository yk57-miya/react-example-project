import React, { Component } from 'react';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.error = '404エラー';
    this.str = 'このページは存在しません';
  }
  render () {
    return (
      <div>
        <h1>{ this.error }</h1> 
        { this.str }
      </div>
    );
  }
}