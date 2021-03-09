import React, { Component } from "react";
import style from '../CSS/player.module.css';
import Controls from './Controls';
import { BrowserRouter as Route, Link } from 'react-router-dom';

export default class Player extends Component {
    state = {
        album: null
    }

    async componentDidMount() {
        const Player = async () => {
            const response1 = await fetch('https://api.laut.fm/station/city/current_song')
            const curmeta = await response1.json();
            this.setState({ title: curmeta.title, artist: curmeta.artist.name });
            const name = curmeta.live === true ? curmeta.title : curmeta.album
            const response2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=${curmeta.artist.name.replace('&', '%26')}&album=${name.replace('&', '%26')}&api_key=ac93b58817c64de67582b6350184ca24&format=json`);
            const curcover = await response2.json();
            const photo = curcover?.album?.image[4]["#text"] !== undefined ? curcover?.album?.image[4]["#text"] : 'https://i.ibb.co/dpnXYhh/CityFM.jpg';
            this.setState({ cover: photo });
        }
        Player();
        setInterval(Player, 40000)
    }

    render() {
        return (
            <section className={style.player}>
                <div className={style.song_cover} style={{ backgroundImage: `url(${this.state.cover})` }}>
                </div>
                <Controls />
                <div>
                    <Link to={`/artist/${this.state.artist}/track/${this.state.title}`}><p className={style.song_meta}>{this.state.title}</p></Link>
                    <Link to={`/artist/${this.state.artist}`}><p className={style.song_meta}>{this.state.artist}</p></Link>
                </div>
            </section>
        )
    }
}