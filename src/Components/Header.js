import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        document.body.style.overflow = (this.state.isToggleOn === true) ? "auto" : "hidden";
    }

    async componentDidMount() {
        const menu = [
            ['История песен', '/lastsongs'],
            ['Чарт', '/chart'],
            ['Программы', '/shows'],
            ['Гостевая книга', '/chat'],
            ['Вебкамера', '/cam'],
            ['Контакты', '/contact']
        ]
        this.setState({ menu: menu })
    }

    render() {
        return (
            <header className={`${this.state.isToggleOn ? ' active' : ''}`}>
                <Link to="/"><h1 className="desktop_logo">City FM</h1></Link>
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
                    {this.state.menu?.map(menu => (
                        <Link to={menu[1]} onClick={this.state.isToggleOn ? this.handleClick : ''}><p>{menu[0]}</p></Link>
                    ))}
                </div>
            </header>
        )
    }
}