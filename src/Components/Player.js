import React, { Component } from 'react'
import style from '../CSS/player.module.css';

export default class Player extends Component {
    state = {
        data: null,
        title: null,
        cover: null,
      };
    
    async componentDidMount() {
        const response = await fetch("https://api.laut.fm/station/city/current_song");
        const data = await response.json();
        this.setState({ data });
        console.log(data);
        const images = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + this.state.data?.artist.name + "&album=" + (this.state.data?.album || this.state.data?.title) + "&api_key=ac93b58817c64de67582b6350184ca24&format=json");
        const dataimage = await images.json();
        const noimage = "Загрузка...";
        this.setState({ dataimage });
        this.setState({ noimage });
        console.log(dataimage);
    }

    render() {
        
        return (
            <section className={style.audio_player}>
                <div><img className={style.song_cover} src={this.state.dataimage?.album.image[4]['#text']} alt="Загрузка..."/></div>
	            <audio controls>
		            <source src="http://stream.laut.fm/city" type="audio/mpeg" />
		            <source src="http://stream.laut.fm/city" type="audio/ogg" />
                    Ваш браузер не поддерживается
                </audio>
                <p>{this.state.data?.artist.name} — {this.state.data?.title}</p>
            </section>
        )
    }
}