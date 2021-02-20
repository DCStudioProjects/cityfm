import React, { Component } from 'react'
import style from '../CSS/feed.module.css';

export default class Feed extends Component {
    render() {
        return (
            <section className={style.feed}>
                <div className={style.feed_post}>
                    <h2>Бодрого утра!</h2>
                    <p></p>
                </div>
                <div className={style.feed_post}>
                    <h2>Золотые 2010-е</h2>
                    <p></p>
                </div>
                <div className={style.feed_post}>
                    <h2>Топ 20</h2>
                    <p></p>
                </div>
            </section>
        )
    }
}
