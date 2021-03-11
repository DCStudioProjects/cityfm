import React, { useState, useEffect } from 'react'
import style from '../CSS/history.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const History = () => {
    const [results, setResults] = useState(null);
    useEffect(() => {
        const Fetch = async () => {
            const lastsongsresponse = await fetch("https://api.laut.fm/station/city/last_songs");
            const lastsongs = await lastsongsresponse.json();

            const promises = lastsongs.map(async (song) => {
                const params = {
                    method: 'album.getInfo',
                    artist: song.artist.name.replace(/ /g, '%20').replace(/&/g, '%26').replace('(', '%28').replace(')', '%29'),
                    album: song.live === true ? song.title.replace(/ /g, '%20').replace(/&/g, '%26').replace('(', '%28').replace(')', '%29') : song.album.replace(/ /g, '%20').replace(/&/g, '%26').replace('(', '%28').replace(')', '%29'),
                    api_key: 'ac93b58817c64de67582b6350184ca24',
                    format: 'json',
                };

                const url = "https://ws.audioscrobbler.com/2.0/?" + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
                const cover = await fetch(url);
                const json = await cover.json();
                const date = new Date(song.started_at);
                const photo = ((json?.album?.image[4]["#text"] !== undefined) && (json?.album?.image[4]["#text"] !== '')) ? json?.album?.image[4]["#text"] : 'https://i.ibb.co/dpnXYhh/CityFM.jpg';
                const songData = {
                    id1: song.id,
                    id2: song.id + 1,
                    artist: song.artist.name,
                    title: song.title,
                    cover: photo,
                    started_at: date.getHours() + ':' + date.getMinutes().toString().padStart(2, '0')
                }
                return (songData);
            });
            const results = await Promise.all(promises);
            setResults(results);
        }
        Fetch()
    }, [])
    return (
        <section className={style.lastsongs}>
            <h2 className={style.section_title}>История эфира:</h2>
            <div className={style.song_history}>
                {results?.map(song => (
                    <div className={style.lastsong} key={song.id1}>
                        <div className={style.lastsong_cover} key={song.id1} style={{ backgroundImage: `url(${song.cover})` }}>
                            <p className={style.song_meta_time}>{song.started_at}</p>
                        </div>
                        <div>
                            <Link to={`/artist/${song.artist.replace(/ /g, '%20').replace(/&/g, '%26')}/track/${song.title.replace(/ /g, '%20').replace(/&/g, '%26')}`}><p className={style.song_meta} key={song.id1}>{song.title}</p></Link>
                            <Link to={`/artist/${song.artist.replace(/ /g, '%20').replace(/&/g, '%26')}`}><p className={style.song_meta} key={song.id2}>{song.artist}</p></Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default History