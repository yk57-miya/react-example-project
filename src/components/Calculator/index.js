import React, { Component } from 'react';
import CalculatorButton from '../CalculatorButton';
// import classNames from 'classnames';

class Calculator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      total: '0',
    };
    this.formula = [];
    this.str = [];
    this.currentValue = '';
    this.flag = 0;
  }

  componentDidMount() {
    window.addEventListener('load', () => {
    });
  }

  allClear() {
    this.setState({
      total: '0',
    });
    this.formula = [];
    this.str = [];
    this.currentValue = '';
  }

  // 1つのブロックを演算子のタイミングで削除
  blockClear() {
    this.str = [];
    this.currentValue = '';
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
    this.str.push(value);
    this.currentValue = this.str.join('');
  }

  calculation(value) {
    this.setState({
      total: `${this.state.total}\t${value}\t`,
    });
    this.formula.push(value);
  }

  calculationResult() {
    const inputValueResult = this.formula.join('');
    console.log(this.formula);
    const result = eval(inputValueResult);
    console.log(888,result, inputValueResult);

    // this.formula.forEach(item => {
    //   if (!isNaN(item)) {
    //     console.log('数字');
    //   } else {
    //     console.log('計算記号');
    //   }
    // });

    this.setState({
      total: result,
    });
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

  calculate(value) {
    this.formula.push(this.currentValue);
    this.blockClear();
    this.calculation(value);
  }

  handleButtonClick(e, value) {
    switch (value) {
    case '+':
      this.calculate(value);
      break;
    case '-':
      this.calculate(value);
      break;
    case 'x':
      this.calculate(value);
      break;
    case '÷':
      this.calculate(value);
      break;
    case '=':
      this.formula.push(this.currentValue);
      this.calculationResult();
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
