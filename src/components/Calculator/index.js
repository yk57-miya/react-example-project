import React, { Component } from 'react';
import CalculatorButton from '../CalculatorButton';
// import classNames from 'classnames';

class Calculator extends Component {
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
    this.handleButtonClick.bind(this);
    console.log(999,e);
  };


  render() {
    return (
      <div className="Calculator">
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="(" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton value=")" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton value="%" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton value="AC" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton value="7"/></div>
          <div className="Calculator__Button"><CalculatorButton value="8"/></div>
          <div className="Calculator__Button"><CalculatorButton value="9"/></div>
          <div className="Calculator__Button"><CalculatorButton value="÷" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton value="4"/></div>
          <div className="Calculator__Button"><CalculatorButton value="5"/></div>
          <div className="Calculator__Button"><CalculatorButton value="6"/></div>
          <div className="Calculator__Button"><CalculatorButton value="x" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton value="1"/></div>
          <div className="Calculator__Button"><CalculatorButton value="2"/></div>
          <div className="Calculator__Button"><CalculatorButton value="3"/></div>
          <div className="Calculator__Button"><CalculatorButton value="-" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton value="0"/></div>
          <div className="Calculator__Button"><CalculatorButton value="."/></div>
          <div className="Calculator__Button"><CalculatorButton value="=" styleColor="main"/></div>
          <div className="Calculator__Button"><CalculatorButton value="+" styleColor="dark"/></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
