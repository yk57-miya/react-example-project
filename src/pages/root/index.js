import React, { Component } from 'react';
import Button from '../../components/Button';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Hello World!!!';
    this.buttons = [
      {
        label: 'about',
        to: '/about'
      },
      {
        label: 'profile',
        to: '/profile'
      },
      {
        label: 'works',
        to: '/works'
      }
    ];
  }
  render () {
    return (
      <div className="Root">
        <h1 className="Root__Title">{ this.str }</h1>
        <div className="Root__Contents">
          <div className="Root__Buttons">
            {
              this.buttons.map((item, i) => {
                return <Button key={ i } item={ item } />;
              })
            }
            {/* <Button myDate={ this.introductionList } /> */}
          </div>
        </div>
      </div>
    );
  }
}