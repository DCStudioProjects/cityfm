import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Test from './Test';
import err404 from './404';

export default class Header extends Component {
    render() {
        return (
            <Router>
            <header>
                <div className='header_logo'>
                <Link to='/'><h1>City FM.beta</h1></Link>
                </div>
                </header>
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/test" component={Test}></Route>

                <Route path="*" component={err404} />
            </Switch>
            </Router>
        )
    }
}