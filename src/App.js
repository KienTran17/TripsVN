import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavLeft from './components/layout/nav-left/NavLeft';
import NavRight from './components/layout/nav-right/NavRight';
import Scroll from './components/layout/nav-left/ScrollUp';
import ModalLogin from './components/layout/ModalLogin';
import ModalSearch from './components/layout/ModalSearch';
import Home from './components/content/home/index';
class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <NavLeft />
          <Scroll />
          <NavRight />
          <Route exact path="/" component={Home} />
          <ModalLogin />
          <ModalSearch />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
