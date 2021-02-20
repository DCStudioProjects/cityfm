import React, { Component } from 'react'
import style from '../CSS/schedule.module.css';

export default class Schedule extends Component {

    state = {
        info: null,
    }

    async componentDidMount() {
        const response1 = await fetch("https://api.laut.fm/station/city");
        const data1 = await response1.json();
        const response2 = await fetch("https://api.laut.fm/station/city/current_song");
        const data2 = await response2.json();
        this.setState({ info: data1, live: data2 });
    }

    render() {
        if (this.state.live?.live === true) {
            return (
                <section className={style.on_air}>
                    <h2>У микрофона:</h2>
                    <div className={style.online}>
                        <h3 className={style.dj_name}>Дэн Климов</h3>
                        <h3 className={style.dj_time}>20:00&nbsp;&nbsp;&gt;&nbsp;&nbsp;23:00</h3>
                    </div>
                </section>
            )
        }
        else {
            return (
                <section className={style.on_air}>
                    <div className={style.on_air}>
                        <h2>Сейчас в эфире:</h2>
                        <h3>{this.state.info?.current_playlist.name}</h3>
                        <p>{this.state.info?.current_playlist.description}</p>
                        <p>{this.state.info?.current_playlist.hour + 2}:00 — {this.state.info?.current_playlist.end_time + 2}:00</p>

                    </div>
                    <div className={style.next_onair}>
                        <h2>Далее в эфире:</h2>
                        <h3>{this.state.info?.next_playlist.name}</h3>
                        <p>{this.state.info?.next_playlist.description}</p>
                        <p>{this.state.info?.next_playlist.hour + 2}:00 — {this.state.info?.next_playlist.end_time + 2}:00</p>
                    </div>
                </section>
            )
        }
    }
}
