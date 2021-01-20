import React, { Component } from 'react'
import style from '../CSS/onair.module.css';

export default class OnAir extends Component {

    state = {
        info: null,
    }

    async componentDidMount () {
        const url = "https://api.laut.fm/station/city";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ info: data });
    }
    
    render() {
        return (
            <section className={style.on_air}>
                <div className={style.on_air}>
                    <h2>Сейчас в эфире:</h2>
                    <h3>{this.state.info?.current_playlist.name}</h3>
                    <p>DJ: {this.state.info?.djs}</p>
                </div>
                <div className={style.next_onair}>
                    <h2>Далее в эфире:</h2>
                    <h3>{this.state.info?.next_playlist.name}</h3>
                    <p>{this.state.info?.next_playlist.description}</p>
                    <p>По пятницам: {this.state.info?.next_playlist.hour + 2}:00 — {this.state.info?.next_playlist.end_time + 2}:00</p>
                    </div>
            </section>
        )
    }
}
