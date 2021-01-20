import React, { Component } from 'react'
import style from '../CSS/lastsongs.module.css';

export default class Lastsongs extends Component {
    state = {
        last: null,
        image: true,
    }

    async componentDidMount () {
        const url = "https://api.laut.fm/station/city/last_songs";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ last: data });
    }
    render() {
        return (
            <section className={style.last_songs}>
                <h2 className={style.section_title}>История эфира:</h2>
                <div className={style.song_history}>
                    {this.state.last?.map (song => (
                        <div className={style.last_song} key={song.id} style={{ backgroundImage: "url(" + song.artist.image + ")"}}>
                            <p>{song.title}</p>
                            <a href={song.artist.url || song.artist.laut_url} target="_blank" rel="noreferrer"><p>{song.artist.name}</p></a>
                        </div>
                    ))}
                </div>
            </section>
        )
    }
}
