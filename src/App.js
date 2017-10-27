import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
const Home = () => <h1>Home</h1>;
class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <header>
            <Header />
          </header>

          <Route exact path="/" component={Home} />
         
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
