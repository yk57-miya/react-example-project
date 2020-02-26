import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class ListItem extends Component {
  constructor (props) {
    super(props);
    this.onCover = classNames('ListItem__Cover');
    this.state = {
      isActive : false
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    console.log(2,this.state);
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log(999,nextProps, prevState);
  //   // if (prevState.isActive !== nextProps) {
  //   // }
  //   return;
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
      console.log('変わった');
      console.log(1,this.state);
      this.onCover = classNames('ListItem__Cover', {
        'ListItem__Cover--active' : this.state.isActive === true
      });
      return true;
    }
    console.log('変更なし');
    return false;
  }

  handleListClick(e) {
    e.stopPropagation();
    window.open(this.props.item.to, '_blank');
  }

  handleItemEnter() {
    this.setState({ isActive: true });
    console.log('hover',this.onCover, this.state);
  }

  handleItemLeave() {
    this.setState({ isActive: false });
    console.log('外す', this.onCover, this.state);
  }

  render() {
    return (
      <div className="ListItem">
        <div className="ListItem__Inner">
          <Link to={location.pathname} onClick={ e => this.handleListClick(e) }>
            <img src={ `./img/${this.props.item.image}` } alt=""/>
            <p>{ this.props.item.name }</p>
          </Link>
        </div>
        <div className={this.onCover} onMouseEnter={ e => this.handleItemEnter(e) } onMouseLeave={ e => this.handleItemLeave(e) }></div>
      </div>
    );
  }
}

export default ListItem;
