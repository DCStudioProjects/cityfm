import React, { Component } from 'react'
import style from '../CSS/chart.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class Chart extends Component {

    state = {

    }

    async componentDidMount() {
        var response = await fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=10&api_key=ac93b58817c64de67582b6350184ca24&format=json");
        const chart = await response.json();
        const topchart = chart.tracks.track;
        this.setState({ topchart });
    }

    render() {
        return (
            <section className={style.chart}>
                <h2 className={style.section_title}>Чарт:</h2>
                <div className={style.chart_list}>
                    {this.state.topchart?.map(charts => (
                        <div className={style.chart_song} key={charts.playcount}>
                            <div className={style.chart_cover} style={{ backgroundImage: "url(" + charts.image[3]["#text"] + ")" }}>
                            </div>
                            <div className={style.chart_meta}>
                                <Link to={`/artist/${charts.artist.name}`}><p>{charts.artist.name}</p></Link>
                                <Link to={`/artist/${charts.artist.name}/track/${charts.name}`}><p>{charts.name}</p></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
