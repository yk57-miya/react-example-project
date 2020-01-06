import React, { Component } from 'react';
import classNames from 'classnames';

class Carousel extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentId: 0,
      styleItem: {
        width: '0px',
        transform: 'translateX(0px)'
      },
      styleCarousel: {
        width: '0px',
        height: '0px'
      }
    };
  }

  getStyle(current) {
    this.carouselWidth = this.itemWidth * this.props.carouselDate.length;
    this.setState({
      currentId: current,
      styleItem: {
        width: `${this.carouselWidth}px`,
        transform: `translateX(-${this.itemWidth * current}px)`
      }
    });
  }

  componentDidMount() {
    // window.addEventListener('load', () => {
    this.itemWidth = this.props.settings.width;
    this.itemHeight = this.props.settings.height;
    this.carouselWidth = this.itemWidth * this.props.carouselDate.length;
    this.setState({
      styleItem: {
        width: `${this.carouselWidth}px`,
        transform: 'translateX(0px)'
      },
      styleCarousel: {
        width: `${this.itemWidth}px`,
        height: `${this.itemHeight}px`
      }
    });
    // });
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.carouselDate !== this.props.carouselDate || nextState !== this.state ) {
      return true;
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.carouselDate !== this.props.carouselDate || nextState !== this.state) {
      return true;
    }
    return false;
  }

  handleItemClick = (e, id) => {
    e.preventDefault();
    this.getStyle(id);
  };

  handlePrevArrowClick = (e, current) => {
    e.preventDefault();
    if (current === 0) {
      this.current = this.props.carouselDate.length - 1;
    } else {
      this.current = current - 1;
    }
    this.getStyle(this.current);
  };

  handleNextArrowClick = (e, current) => {
    e.preventDefault();
    if (current === this.props.carouselDate.length - 1) {
      this.current = 0;
    } else {
      this.current = current + 1;
    }
    this.getStyle(this.current);
  };

  handleButtonClick = (e, id) => {
    e.preventDefault();
    this.current = id;
    this.getStyle(id);
  };

  render() {
    return (
      <div className="Carousel">
        <div ref={ node => this.carouselRef = node } className="Carousel__Inner" style={ this.state.styleCarousel }>
          <ul className="Carousel__List" style={ this.state.styleItem }>{
            this.props.carouselDate.map((item, i) => {
              return (
                <li ref={ node => this.itemRef = node } key={ i } className="Carousel__Item" onClick={ e => this.handleItemClick(e, i) }>
                  <span>{ item.title }</span>
                  <img src={ `./img/${item.image_url}` } alt={ item.title } />
                </li>
              );
            })
          }</ul>
        </div>
        <div className="Carousel__Arrow Carousel__Arrow--prev" onClick={ e => this.handlePrevArrowClick(e, this.state.currentId) }></div>
        <div className="Carousel__Arrow Carousel__Arrow--next" onClick={ e => this.handleNextArrowClick(e, this.state.currentId) }></div>
        <div className="Carousel__Pager">{
          this.props.carouselDate.map((item, i) => {
            const Pager = classNames('Carousel__Page', {
              'Carousel__Page--active' : this.state.currentId === i
            });
            return <div key={ i } className={ Pager } onClick={ e => this.handleButtonClick(e, i) }></div>;
          })
        }</div>
      </div>
    );
  }
}

export default Carousel;
