import React, { Component } from 'react';
import classNames from 'classnames';

class Tab extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentId: 0,
      styleTab: {
        transform: 'translateX(0px)'
      }
    };
  }

  handleTabClick = (e, id) => {
    e.preventDefault();
    this.width = e.target.clientWidth;    
    this.setState({ currentId : id});
    this.setState({ styleTab: {
      transform: `translateX(${this.width*id}px)`
    } });
  };

  // componentDidmount() {
  //   window.addEventListener('load', () => {
  //   });
  // }

  shouldComponentUpdate(nextProps, nextStatus) {
    if (this.props.tabDate !== nextProps.tabDate ||this.state.styleTab !== nextStatus.styleTab) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="Tab">
        <ul>{
          this.props.tabDate.map((item, i) => {
            const tabTitle = classNames('Tab__Title', {
              'Tab__Title--active' : this.state.currentId === i
            });
            return <li key={ i } className={ tabTitle } onClick={ e => this.handleTabClick(e, i) }>{ item.name }</li>;
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
