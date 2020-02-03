import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  handleButtonClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="Button">
        <div className="Button__Item"><Link to={ this.props.item.to }>{ this.props.item.label }</Link></div>
      </div>
    );
  }
}

export default Button;
