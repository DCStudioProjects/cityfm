import React, { Component } from 'react'
import style from '../CSS/chart.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';

export default class Chart extends Component {

    state = {

    }

    async componentDidMount() {
        var response = await fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=5&api_key=ac93b58817c64de67582b6350184ca24&format=json");
        var chart = await response.json();
        var chart = chart.tracks.track;
        const info = chart.map(async (song) => {
            const params = {
                method: 'album.getInfo',
                artist: song.artist.name.replace('&', '%26'),
                album: song.name.replace('&', '%26').replace('+', '%2B'),
                api_key: 'ac93b58817c64de67582b6350184ca24',
                format: 'json',
            }
            const url = "https://ws.audioscrobbler.com/2.0/?" + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
            const response = await fetch(url);
            const info = await response.json();
            return (info)
        })
        const results = await Promise.all(info)
        const key = 1;
        this.setState({ chart: results, key: key });
    }

    render() {
        return (
            <section className={style.chart}>
                <h2 className={style.section_title}>Чарт:</h2>
                <div className={style.chart_container}>
                    <div className={style.chart_list}>
                        {this.state.chart?.map(charts => (
                            <div className={style.chart_song} key={charts.album?.playcount}>
                                <p className={style.chart_number}>{this.state.key++}</p>
                                <div className={style.chart_cover} style={{ backgroundImage: "url(" + charts.album?.image[4]["#text"] + ")" }}>
                                </div>
                                <div className={style.chart_meta}>
                                    <Link to={`/artist/${charts.album?.artist}/track/${charts.album?.name}`}><p>{charts.album?.name}</p></Link>
                                    <Link to={`/artist/${charts.album?.artist}`}><p>{charts.album?.artist}</p></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={style.chart_next}><Link to="/chart">Далее</Link></div>
                </div>
            </section>
        )
    }
}
