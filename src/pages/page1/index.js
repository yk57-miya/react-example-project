import React, { Component } from 'react';
import Tab from '../../components/Tab';

export default class Page1 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Page1';
    this.tabList1 = [
      {
        name: 'Tab 1',
        content: 'Content Tab 1',
      },
      {
        name: 'Tab 2',
        content: 'Content Tab 2',
      },
      {
        name: 'Tab 3',
        content: 'Content Tab 3',
      },
    ];
    this.tabList2 = [
      {
        name: 'い ぬ',
        content: 'かわいい',
      },
      {
        name: 'と り',
        content: 'きらい',
      },
      {
        name: 'ね こ',
        content: '史上最強',
      },
    ];
  }
  render () {
    return (
      <div className="Page1">        
        <h1>{ this.str }</h1>
        <Tab tabDate={ this.tabList1 } />
        <Tab tabDate={ this.tabList2 } />
      </div>
    );
  }
}