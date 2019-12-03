import React, { Component } from 'react';
import Carousel from '../../components/Carousel';

export default class Page2 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Carousel Component';
    this.carouselList = [];
    for (let i = 0; i < 4; i++) {
      const catList = {
        title: `にゃんこ ${i+1}`,
        image_url: `cat_${i+1}.jpg`,
      };
      this.carouselList.push(catList);
    }
  }
  render () {
    return (
      <div className="Page2">
        <h1>{ this.str }</h1>
        <Carousel carouselDate={ this.carouselList } />
      </div>
    );
  }
}