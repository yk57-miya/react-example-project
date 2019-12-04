import React, { Component } from 'react';
import constants from '../../constants';
import classNames from 'classnames';

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentId: 0,
      style: {
        width: '0px',
        transform: 'translateX(0px)'
      }
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      const itemWidth = constants.carousel.desktop.unitWidth;
      this.CarouselWidth = itemWidth * this.props.carouselDate.length;
      this.setState({ style: {
        width: `${this.CarouselWidth}px`,
        transform: 'translateX(0px)'
      }});
    });
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
      this.setState({ style: {
        width: `${this.CarouselWidth}px`
      }});
    }
    return false;
  }

  // TODO:一旦コメントアウト
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
  //     return true;
  //   }
  //   return false;
  // }

  handleItemClick = (e, id) => {
    e.preventDefault();
    this.width = e.target.clientWidth;
    this.setState({ currentId : id });
    this.setState({ styleTab: {
      width: this.width,
      transform: `translateX(${this.width*id}px)`
    } });
  };

  handlePrevArrowClick = (e, current) => {
    e.preventDefault();
    const itemWidth = this.itemRef.clientWidth;
    if (current === 0) {
      this.current = this.props.carouselDate.length - 1;
    } else {
      this.current = current - 1;
    }
    this.setState({ currentId: this.current });
    this.setState({ style: {
      width: `${this.CarouselWidth}px`,
      transform: `translateX(-${itemWidth * this.current}px)`
    }});
  };

  handleNextArrowClick = (e, current) => {
    e.preventDefault();
    const itemWidth = this.itemRef.clientWidth;
    if (current === this.props.carouselDate.length - 1) {
      this.current = 0;
    } else {
      this.current = current + 1;
    }
    this.setState({
      currentId: this.current,
      style: {
        width: `${this.CarouselWidth}px`,
        transform: `translateX(-${itemWidth * this.current}px)`
      }
    });
  };

  render() {
    return (
      <div className="Carousel">
        <div ref={ node => this.carouselRef = node } className="Carousel__Inner">
          <ul className="Carousel__List" style={ this.state.style }>{
            this.props.carouselDate.map((item, i) => {
              return (
                <li ref={ node => this.itemRef = node } key={ i } className="Carousel__Item">
                  <span>{ item.title }</span>
                  <img src={ `./img/${item.image_url}` } alt={ item.title } />
                </li>
              );
            })
          }</ul>
        </div>
        <div className="Carousel__Custom">
          <div className="Carousel__Arrow Carousel__Arrow--prev" onClick={ e => this.handlePrevArrowClick(e, this.state.currentId) }></div>
          <div className="Carousel__Arrow Carousel__Arrow--next" onClick={ e => this.handleNextArrowClick(e, this.state.currentId) }></div>
        </div>
        <div className="Carousel__Pager">{
          this.props.carouselDate.map((item, i) => {
            const Pager = classNames('Carousel__Page', {
              'Carousel__Page--active' : this.state.currentId === i
            });
            return <div key={ i } className={ Pager }></div>;
          })
        }</div>
      </div>
    );
  }
}

export default Carousel;
