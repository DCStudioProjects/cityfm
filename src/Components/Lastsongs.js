import React, { Component } from 'react'
import style from '../CSS/lastsongs.module.css';

export default class Lastsongs extends Component {
    state = {
        
    }

    async componentDidMount () {
        var response = await fetch("https://api.laut.fm/station/city/last_songs");
        const data1 = await response.json();
        const data2 = [];
        const array2 = [];
        for (var i = 0; i < 7; i++) {
            let response = await fetch("https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=" + data1[i].artist.name.replace(' & ', ', ') + "&album=" + data1[i].album + "&api_key=ac93b58817c64de67582b6350184ca24&format=json");
            data2[i] = await response.json();
            var date = new Date(data1[i].started_at)
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            let array1 = {id1: data1[i].id, id2: data1[i].id + 1, artist: data1[i].artist.name, title: data1[i].title, cover: data2[i].album.image[4]["#text"], started_at: date.getHours() + ":" + minutes}
            array2[i] = array1
        }
        this.setState({results: array2})
    }


    render() {
        return (
           <section className={style.lastsongs}>
                <h2 className={style.section_title}>История эфира:</h2>
                <div className={style.song_history}>
                    {this.state.results?.map (song => (
                        <div className={style.lastsong} key={song.id1}>
                        <div className={style.lastsong_cover} key={song.id1} style={{ backgroundImage: "url(" + song.cover + ")"}}>     
                        <p className={style.song_meta_time}>{song.started_at}</p>
                        </div>
                        <div>
                        <p className={style.song_meta} key={song.id1}>{song.title}</p>
                        <p className={style.song_meta} key={song.id2}>{song.artist}</p>
                        </div>
                        </div>
                    ))}
                    </div>
            </section>
        )
    }
}
