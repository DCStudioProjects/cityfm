import React, { Component } from 'react'
import style from '../CSS/player.module.css';

let image = "https://assets.laut.fm/e1d6bde4572a8adb921bb70b0655e918";

export default class Player extends Component {
    state = {
        info: null,
        title: null,
      };
    
    async componentDidMount() {
        const url = "https://api.laut.fm/station/city/current_song";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ info: data });
    }
    render() {
        
        return (
            <section className={style.audio_player}>
                <div><img className={style.song_cover} src={this.state.info?.artist.image} /></div>
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