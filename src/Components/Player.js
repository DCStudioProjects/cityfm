import React, { Component } from 'react'
import style from '../CSS/player.module.css';

export default class Player extends Component {
    state = {
        data: null,
        title: null,
        cover: null,
    };
    
    async componentDidMount() {
        var response = await fetch("https://api.laut.fm/station/city/current_song");
        const data = await response.json();
        this.setState({ data });
        var response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + this.state.data?.artist.name.replace(' & ', ', ') + "&album=" + (this.state.data?.album.replace(' & ', ', ') || this.state.data?.title.replace(' & ', ', ')) + "&api_key=ac93b58817c64de67582b6350184ca24&format=json");
        const dataimage = await response.json();
        this.setState({ dataimage });
    }

    render() {
        
        return (
            <section className={style.audio_player}>
                <div><img className={style.song_cover} src={this.state.dataimage?.album.image[4]['#text']} alt="Загрузка..."/></div>
	            <audio controls>
		            <source src="https://stream.laut.fm/city" type="audio/mpeg" />
		            <source src="https://stream.laut.fm/city" type="audio/ogg" />
                    Ваш браузер не поддерживается
                </audio>
                <p>{this.state.data?.artist.name} — {this.state.data?.title}</p>
            </section>
        )
    }
}