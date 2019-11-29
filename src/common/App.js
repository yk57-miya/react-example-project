import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Menu/> {/* withRouter ※自身をRouterで囲む */}
        </Router>
      </div>
    );
  }
}

export default App;
