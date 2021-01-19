import React, { Component } from 'react'
import style from '../CSS/feed.module.css';

export default class Feed extends Component {
    render() {
        return (
            <section className={style.feed}>
                <div className={style.feed_post}>
                    <h2>Добро пожаловать на станцию City FM!</h2>
                    <p>24x7</p>
                </div>
                <div className={style.feed_post}>
                    <h2>2010'S HOT SHOW WITH DANNY FUN</h2>
                    <p></p>
                </div>
            </section>
        )
    }
}
