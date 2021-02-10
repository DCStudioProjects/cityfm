import React, { Component } from "react";
import style from '../CSS/player.module.css';
import Controls from './Controls';

export default class Player extends Component {
    state = {

    }

    async componentDidMount() {
        var response = await fetch('https://api.laut.fm/station/city/current_song')
        const curmeta = await response.json();
        this.setState({title: curmeta.title, artist: curmeta.artist.name});
        var response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + curmeta.artist.name.replace(' & ', ', ') + "&album=" + curmeta.album + "&api_key=ac93b58817c64de67582b6350184ca24&format=json");
        const curcover = await response.json();
        this.setState({cover: curcover.album.image[4]["#text"]});
    }

    render() {
        return (
            <section className={style.player}>
                <div className={style.song_cover} style={{ backgroundImage: "url(" + this.state.cover + ")"}}>
                </div>
                <Controls/>
                <div>
                <p className={style.song_meta}>{this.state.title}</p>
                <p className={style.song_meta}>{this.state.artist}</p>
                </div>
            </section>
        )
    }
}