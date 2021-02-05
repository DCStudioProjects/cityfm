import React, { Component } from 'react'
import style from '../CSS/feed.module.css';

export default class Feed extends Component {
    render() {
        return (
            <section className={style.feed}>
                <div className={style.feed_post}>
                    <h2>GOOD MORNING GUYS!</h2>
                    <p></p>
                </div>
                <div className={style.feed_post}>
                    <h2>2010'S HOT SHOW</h2>
                    <p></p>
                </div>
                <div className={style.feed_post}>
                    <h2>HOT20 COUNTDOWN</h2>
                    <p></p>
                </div>
            </section>
        )
    }
}
