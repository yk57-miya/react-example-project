import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  // componentDidUpdate(nextProps, nextState) {
  //   if (nextProps.tabDate !== this.props.tabDate || nextState.styleButton !== this.state.styleButton) {
  //     return true;
  //   }
  //   return false;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.tabDate !== this.props.tabDate || nextState.styleButton !== this.state.styleButton) {
  //     return true;
  //   }
  //   return false;
  // }

  handleButtonClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="Button">
        <ul className="Button__List">{
          this.props.myDate.map((item, i) => {
            const url = `/${item}`;

            return <li className="Button__Item" key={ i }><Link to={ url }>{ item }</Link></li>;
          })
        }</ul>
      </div>
    );
  }
}

export default Button;
