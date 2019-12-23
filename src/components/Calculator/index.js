import React, { Component } from 'react';
import CalculatorButton from '../CalculatorButton';
// import classNames from 'classnames';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      total: '0',
      currentValue: ''
    };
    this.formula = [];
  }

  componentDidMount() {
    window.addEventListener('load', () => {
    });
  }

  allClear() {
    this.setState({
      total: '0',
      currentValue: ''
    });
  }

  inputValue(value) {
    if (this.state.total === '0') {
      this.setState({
        total: `${value}`
      });
    } else {
      this.setState({
        total: `${this.state.total}${value}`,
      });
    }
  }

  calculation(value) {
    // console.log(value);
    this.setState({
      total: `${this.state.total}\t${value}\t`,
      currentValue: `${this.state.total}`
    });
    this.formula.push(value);
    // console.log(this.formula);
    // console.log(this.state.currentValue);
  }

  // componentDidUpdate(nextProps, nextState) {
  //   if (nextState !== this.state) {
  //     return true;
  //   }
  //   return false;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState !== this.state) {
  //     return true;
  //   }
  //   return false;
  // }

  handleButtonClick(e, value) {
    switch (value) {
    case '+':
      this.formula.push(this.state.total);
      this.calculation(value);
      // console.log('たし');
      break;
    case '-':
      // console.log('ひき');
      break;
    case 'x':
      // console.log('かけ');
      break;
    case '÷':
      // console.log('わる');
      break;
    case '=':
      // console.log('結果');
      break;
    case 'AC':
      this.allClear();
      break;
    default:
      this.inputValue(value);
      break;
    }
  }



  render() {
    return (
      <div className="Calculator">
        <div className="Calculator__Result">
          <div className="Calculator__ResultInner" ref={ node => this.resultRef = node }>{ this.state.total }</div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="(" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value=")" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="%" styleColor="dark"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="AC" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="7"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="8"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="9"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="÷" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="4"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="5"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="6"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="x" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="1"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="2"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="3"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="-" styleColor="dark"/></div>
        </div>
        <div className="Calculator__Row">
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="0"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="."/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="=" styleColor="main"/></div>
          <div className="Calculator__Button"><CalculatorButton handleButtonClick={ this.handleButtonClick.bind(this) } value="+" styleColor="dark"/></div>
        </div>
      </div>
    );
  }
}

export default Calculator;
