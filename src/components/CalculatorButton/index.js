import React, { Component } from 'react';
// import classNames from 'classnames';

class CalculatorButton extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('load', () => {

    });
  }

  // componentDidUpdate(nextProps, nextState) {
  //   if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
  //     return true;
  //   }
  //   return false;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
  //     return true;
  //   }
  //   return false;
  // }

  handleButtonClick = e => {
    e.preventDefault();
    this.props.handleButtonClick(e,this.props.value);
  }

  getStyleColor(style) {
    if (!style) {
      return;
    }
    return `CalculatorButton__Item CalculatorButton__Item--${style}`;
  }

  render() {
    const styleColor = this.props.styleColor;
    return (
      <div className="CalculatorButton">
        <input className={`CalculatorButton__Item ${this.getStyleColor(styleColor)}`} type="button" value={ this.props.value } onClick={ this.handleButtonClick } disable="disable"/>
      </div>
    );
  }
}

export default CalculatorButton;
