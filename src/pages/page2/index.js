import React, { Component } from 'react';
import Carousel from '../../components/Carousel';
import constants from '../../constants';

export default class Page2 extends Component {
  constructor (props) {
    super(props);
    this.str = 'Carousel Component';
    this.settings1 = {
      width: constants.carousel.desktop.unitWidth,
      height: constants.carousel.desktop.unitHeight
    };
    this.settings2 = {
      width: constants.landscapeCarousel.desktop.unitWidth,
      height: constants.landscapeCarousel.desktop.unitHeight
    };
    this.carouselList1 = [];
    this.carouselList2 = [];
    for (let i = 0; i < 4; i++) {
      const catList = {
        title: `にゃんこ ${i+1}`,
        image_url: `cat_${i+1}.jpg`,
      };
      this.carouselList1.push(catList);
    }

    for (let i = 0; i < 3; i++) {
      const tomList = {
        title: `TOM ${i+1}`,
        image_url: `tom_${i+1}.jpg`,
      };
      this.carouselList2.push(tomList);
    }

  }
  render () {
    return (
      <div className="Page2">
        <h1 className="Page2__Title">{ this.str }</h1>
        <p className="Page2__SubTitle">normal carousel</p>
        <div className="Page2__Content">
          <Carousel carouselDate={ this.carouselList1 } settings={ this.settings1 }/>
        </div>
        <p className="Page2__SubTitle">landscape carousel</p>
        <div className="Page2__Content">
          <Carousel carouselDate={ this.carouselList2 } settings={ this.settings2 }/>
        </div>
      </div>
    );
  }
}