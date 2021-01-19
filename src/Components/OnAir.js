import React, { Component } from 'react'
import style from '../CSS/onair.module.css';

export default class OnAir extends Component {
    render() {
        return (
            <section className={style.on_air}>
                <h2>Сейчас в эфире</h2>
            </section>
        )
    }
}
