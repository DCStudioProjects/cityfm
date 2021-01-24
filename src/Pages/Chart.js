import React, { Component } from 'react'
import style from '../CSS/chart.module.css';

export default class Chart extends Component {
    state = {
        data: null,
        chart: null,
    }

    async componentDidMount () {
        const url = "https://download1521.mediafire.com/6q656h2h6apg/x50lzbligc0l9a4/chart.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ chart: data.tracks });
        this.setState({ i: 1 });
        console.log(data);
    }

    render() {
        return (
            <section className={style.last_songs}>
                <h2 className={style.section_title}>HOT20 COUNTDOWN:</h2>
                <div className={style.song_history}>
                    {this.state.chart?.map (song => (
                        <div>
                        <span className={style.last_song} key={song.key} style={{backgroundImage: "url(https://images.shazam.com/coverart/t538883143-i1533450212_s400.jpg)"}}></span>
                        <p>{this.state.i++}. {song.subtitle} — {song.title}</p>
                        <p>{song.title}</p>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}