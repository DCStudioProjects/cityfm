import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render() {
        return (
            <header>
                <div className="mobile_header">
                    <div onClick={this.handleClick} className={`burger${this.state.isToggleOn ? ' active' : ''}`}>
                        <span className="burger_line"></span>
                    </div>
                    <div className="mobile_logo">
                        <Link to="/"><h1>City FM</h1></Link>
                    </div>
                    <p className="mobile_description">№1 in Moscow</p>
                </div>
                <div className={`nav_content${this.state.isToggleOn ? ' active' : ''}`}>
                    <Link to="/lastsongs" onClick={this.handleClick}><p>История песен</p></Link>
                    <Link to="/chart" onClick={this.handleClick}><p>Чарт</p></Link>
                    <Link to="/shows" onClick={this.handleClick}><p>Программы</p></Link>
                    <Link to="/player" onClick={this.handleClick}><p>Плеер</p></Link>
                    <Link to="/chat" onClick={this.handleClick}><p>Гостевая книга</p></Link>
                    <Link to="/cam" onClick={this.handleClick}><p>Вебкамера</p></Link>
                    <Link to="/contact"><p>Контакты</p></Link>
                </div>
            </header>
        )
    }
}