import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <header>
                <div className="mobile_header">
                    <div className="burger">
                        <span className="burger_line"></span>
                    </div>
                    <div className="mobile_logo">
                        <Link to="/"><h1>City FM</h1></Link>
                    </div>
                    <p className="mobile_description">№1 in Moscow</p>
                </div>
                <div className={`nav_content`}>
                    <Link to="/"><h1>City FM<br></br>beta</h1></Link>
                    <Link to="/lastsongs"><p>История песен</p></Link>
                    <Link to="/chart"><p>Чарт</p></Link>
                    <Link to="/shows"><p>Программы</p></Link>
                    <Link to="/player"><p>Плеер</p></Link>
                    <Link to="/chat"><p>Гостевая книга</p></Link>
                    <Link to="/cam"><p>Вебкамера</p></Link>
                    <Link to="/contact"><p>Контакты</p></Link>
                </div>
            </header>
        )
    }
}