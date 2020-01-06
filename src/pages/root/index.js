import React, { Component } from 'react';
import Button from '../../components/Button';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Hello World!!!';
    this.introductionList = [ 'about', 'profile', 'works' ];
  }
  render () {
    return (
      <div className="Root">
        <h1 className="Root__Title">{ this.str }</h1>
        <div className="Root__Contents">
          <Button myDate={ this.introductionList } />
        </div>
      </div>
    );
  }
}