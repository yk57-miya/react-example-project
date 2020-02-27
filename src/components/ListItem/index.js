import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class ListItem extends Component {
  constructor (props) {
    super(props);
    this.onItem = classNames('ListItem');
    this.state = {
      isActive : false
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps !== this.props || nextState !== this.state) {
      return true;
    }
    return false;
  }

  handleListClick(e) {
    e.stopPropagation();
    window.open(this.props.item.to, '_blank');
  }

  handleItemEnter() {
    this.setState({ isActive: true });
  }

  handleItemLeave() {
    this.setState({ isActive: false });
  }

  render() {
    this.onItem = classNames('ListItem', {
      'ListItem--active' : this.state.isActive === true
    });
    return (
      <div className={this.onItem} onMouseEnter={ e => this.handleItemEnter(e) } onMouseLeave={ e => this.handleItemLeave(e) }>
        <div className="ListItem__Inner">
          <div className="ListItem__Front">
            <img src={ `./img/${this.props.item.image}` } alt=""/>
          </div>
          <div className="ListItem__Back">
            <Link to={ location.pathname } onClick={ e => this.handleListClick(e) }>
              <p>{ this.props.item.name }</p>
              <p>{ this.props.item.description }</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
