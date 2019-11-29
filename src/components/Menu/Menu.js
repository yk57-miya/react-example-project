import React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TopPage from '../../pages/root';
import Page1 from '../../pages/page1';
import Page2 from '../../pages/page2';
import Page3 from '../../pages/page3';
import Page404 from '../../pages/error';

const MenuBar = ({ children }) => (
  <div className="Menu">
    <ul>
      <li><Link to='/'>top</Link></li>
      <li><Link to='/page1'>page1</Link></li>
      <li><Link to='/page2'>page2</Link></li>
      <li><Link to='/page3'>page3</Link></li>
    </ul>
    { children }
  </div>
);

const Menu = ({ location }) => {  
  const currentkey = location.pathname.split('/')[1] || '';
  return (
    <MenuBar>
      <TransitionGroup>
        <CSSTransition key={ currentkey } classNames='fade' timeout={800}>
          {/*Routeを配置 exactを指定してマッチングを厳密に*/}
          <div style={{marginLeft: '50px', position: 'absolute', top: '5rem'}}>
            <Switch location={ location }>
              <Route path='/' exact component={ TopPage }/>
              <Route path='/page1' exact component={ Page1 } /> 
              <Route path='/page2' exact component={ Page2 } /> 
              <Route path='/page3' exact component={ Page3 } /> 
              <Route exact component={ Page404 } /> {/* 一番末尾に追記(pathの指定も対応するLinkも必要ない) */}
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </MenuBar>
  );
};

export default withRouter(Menu);
