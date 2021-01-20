import React, { Component } from 'react'
import style from '../CSS/player.module.css';

let image = "https://assets.laut.fm/e1d6bde4572a8adb921bb70b0655e918";

export default class Player extends Component {
    state = {
        info: null,
        title: null,
        cover: null,
      };
    
    async componentDidMount() {
        const url = "https://api.laut.fm/station/city/current_song";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ info: data });
        console.log(data);
        const artistname = this.state.info?.artist.name;
        const title = this.state.info?.title;
        let image = "http://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + artistname + "&album=" + title + "&api_key=ac93b58817c64de67582b6350184ca24&format=json";
        const images = await fetch(image);
        const dataimage = await images.json();
        const noimage = "Загрузка...";
        this.setState({ dataimage });
        this.setState({ noimage });
        console.log(dataimage);
    }

    render() {
        
        return (
            <section className={style.audio_player}>
                <div><img className={style.song_cover} src={this.state.dataimage?.album.image[4]['#text'] || !this.state.info?.artist.image}/></div>
	            <audio controls>
		            <source src="http://stream.laut.fm/city" type="audio/mpeg" />
		            <source src="http://stream.laut.fm/city" type="audio/ogg" />
                    Ваш браузер не поддерживается
                </audio>
                <p>{this.state.info?.artist.name} — {this.state.info?.title}</p>
            </section>
        )
    }
}