import React, { Component } from 'react';
import classNames from 'classnames';

class Tab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentId: 0,
      styleTab: {
        width: '0px',
        transform: 'translateX(0px)'
      }
    };
  }

  componentDidMount() {
    // window.addEventListener('load', () => {
    this.width = this.tabRef.clientWidth;
    this.setState({ styleTab: {
      width: this.width,
      transform: 'translateX(0px)'
    }});
    // });
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
      return true;
    }
    return false;
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(this.state.styleTab, nextState.styleTab);
    if (nextProps.tabDate !== this.props.tabDate || nextState.styleTab !== this.state.styleTab) {
      return true;
    }
    return false;
  }

  handleTabClick = (e, id) => {
    e.preventDefault();
    this.width = e.target.clientWidth;
    this.setState({ currentId : id });
    this.setState({ styleTab: {
      width: this.width,
      transform: `translateX(${this.width*id}px)`
    } });
  };

  render() {
    return (
      <div className="Tab">
        <ul>{
          this.props.tabDate.map((item, i) => {
            const tabTitle = classNames('Tab__Title', {
              'Tab__Title--active' : this.state.currentId === i
            });
            return <li ref={ node => this.tabRef = node } key={ i } className={ tabTitle } onClick={ e => this.handleTabClick(e, i) }>{ item.name }</li>;
          })
        }</ul>
        <div className="Tab__UnderLine" style={ this.state.styleTab }></div>
        {
          this.props.tabDate.map((item, i) => {
            const TabContent = classNames('Tab__Content', {
              'Tab__Content--active' : this.state.currentId === i
            });
            return <div key={ i } className={ TabContent }>{ item.content }</div>;
          })
        }
      </div>
    );
  }
}

export default Tab;
