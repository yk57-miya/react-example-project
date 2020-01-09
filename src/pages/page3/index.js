import React, { Component } from 'react';
import Calculator from '../../components/Calculator';

export default class Page3 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Calculator Component';
  }
  render () {
    return (
      <div className="Page3">
        <div className="Page3__Title">{ this.str }</div>
        {/* <p className="Page3__SubTitle"></p> */}
        <div className="Page3__Content">
          <Calculator/>
        </div>
      </div>
    );
  }
}