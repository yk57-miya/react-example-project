import React, { Component } from 'react';
import classNames from 'classnames';

class Tab extends Component {
  constructor (props) {
    super(props);
    this.currentId = 0;
    this.state = {
      styleTab: {
        width: '0px',
        transform: 'translateX(0px)'
      }
    };
  }

  getUnderLineStyle (current) {
    this.currentId = current;
    const widths = [];
    let lineLength = 0;
    for (let i in this.refs) {
      widths.push(this.refs[i].clientWidth);
    }
    for (let i = 0; i < this.currentId; i++) {
      lineLength += widths[i];
    }
    return {
      width: `${widths[this.currentId]}px`,
      transform: `translateX(${ lineLength }px)`
    };
  }

  componentDidMount() {
    this.setState({ styleTab: this.getUnderLineStyle(this.currentId)});
    console.log(this.state);
  }

  componentDidUpdate(nextProps, nextState) {
    if (this.props.tabDate !== nextProps.tabDate || this.state.styleTab !== nextState.styleTab) {
      return true;
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // TODO: console.log(this.state.styleTab, nextState.styleTab);
    if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
      return true;
    }
    return false;
  }

  handleTabClick = (e, id) => {
    e.preventDefault();
    this.setState({ styleTab: this.getUnderLineStyle(id)});
  };

  render() {
    return (
      <div className="Tab">
        <ul>{
          this.props.tabDate.map((item, i) => {
            const tabTitle = classNames('Tab__Title', {
              'Tab__Title--active' : this.currentId === i
            });
            return <li ref={ `tabItem${i}` } key={ i } className={ tabTitle } onClick={ e => this.handleTabClick(e, i) }>{ item.name }</li>;
          })
        }</ul>
        <div className="Tab__UnderLine" style={ this.state.styleTab }></div>
        {
          this.props.tabDate.map((item, i) => {
            const TabContent = classNames('Tab__Content', {
              'Tab__Content--active' : this.currentId === i
            });
            return <div key={ i } className={ TabContent }>{ item.content }</div>;
          })
        }
      </div>
    );
  }
}

export default Tab;
