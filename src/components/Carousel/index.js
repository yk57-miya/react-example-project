import React, { Component } from 'react';
// import classNames from 'classnames';
import Image1 from '../../img/cat_1.jpg';
import Image2 from '../../img/cat_2.jpg';
import Image3 from '../../img/cat_3.jpg';
import Image4 from '../../img/cat_4.jpg';

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      image: {
        img_1: Image1,
        img_2: Image2,
        img_3: Image3,
        img_4: Image4,
      }
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
      return true;
    }
    return false;
  }

  handleTabClick = (e, id) => {
    e.preventDefault();
    this.width = e.target.clientWidth;
    this.setState({ currentId : id });
    this.setState({ styleTab: {
      width: this.width,
      transform: `translateX(${this.width*id}px)`
    } });
  };

  render() {
    return (
      <div className="Carousel">
        <ul className="Carousel__List">{
          this.props.carouselDate.map((item, i) => {
            console.log(this.state.image);
            return (
              <li key={ i } className="Carousel__Item" onClick={ e => this.handleTabClick(e, i) }>
                { item.title }
                <img src="" alt="" />
              </li>
            )
          })
        }</ul>
      </div>
    );
  }
}

export default Carousel;
