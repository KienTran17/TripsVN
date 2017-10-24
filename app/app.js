import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
const Home = () => <h2>Home component</h2>;

class App extends Component {

    render() {

        return (
            <BrowserRouter basename="/">
                <div>
                    <Header />

                    <Route exact path="/" component={Home} />

                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <Provider store>
        <App />
    </Provider>,
    document.getElementById('root')// eslint-disable-line
);

