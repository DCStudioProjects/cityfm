import React, { Component } from 'react'
import style from '../CSS/lastsongs.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';
export default class Lastsongs extends Component {
    state = {
    }

    async componentDidMount() {
        const LastSongs = async () => {
            const lastSongsResponse = await fetch("https://api.laut.fm/station/city/last_songs");
            const lastSongs = await lastSongsResponse.json();
            lastSongs.length = Math.min(6, lastSongs.length);

            const promises = lastSongs.map(async (song) => {
                const params = {
                    method: 'album.getInfo',
                    artist: song.artist.name.replace('&', '%26'),
                    album: song.live === true ? song.title.replace('&', '%26') : song.album.replace('&', '%26'),
                    api_key: 'ac93b58817c64de67582b6350184ca24',
                    format: 'json',
                };

                const url = "https://ws.audioscrobbler.com/2.0/?" + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
                const cover = await fetch(url);
                const json = await cover.json();
                const date = new Date(song.started_at);

                const songData = {
                    id1: song.id,
                    id2: song.id + 1,
                    artist: song.artist.name,
                    title: song.title,
                    cover: json?.album?.image[4]["#text"],
                    started_at: date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')
                }
                return (songData);
            });
            const results = await Promise.all(promises);
            this.setState({ results: results })
        }
        LastSongs();
        setInterval(LastSongs, 15000);
    }


    render() {
        return (
            <section className={style.lastsongs}>
                <h2 className={style.section_title}>История эфира:</h2>
                <div className={style.section_container}>
                    <div className={style.song_history}>
                        {this.state.results?.map(song => (
                            <div className={style.lastsong} key={song.id1}>
                                <div className={style.lastsong_cover} key={song.id1} style={{ backgroundImage: `url(${song.cover})` }}>
                                    <p className={style.song_meta_time}>{song.started_at}</p>
                                </div>
                                <div>
                                    <Link to={`/artist/${song.artist}/track/${song.title}`}><p className={style.song_meta} key={song.id1}>{song.title}</p>
                                        <p className={style.song_meta} key={song.id2}>{song.artist}</p></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={style.lastsongs_next}><Link to="/lastsongs">Далее</Link></div>
                </div>
            </section>
        )
    }
}
