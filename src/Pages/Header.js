import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Chart from './Chart';
import err404 from './404';

export default class Header extends Component {
    render() {
        return (
            <Router>
            <header>
                <div className='header_logo'>
                <Link to='/'><h1>City FM</h1></Link>
                </div>
                <div className="header_desktop_nav"> 
                <Link to="/">Главная</Link> 
                <Link to="/chart">Чарт</Link> 
                </div>
                </header>
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/chart" component={Chart}></Route>
                <Route path="*" component={err404} />
            </Switch>
            </Router>
        )
    }
}