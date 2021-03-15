import React, { useEffect, useState } from 'react'
import style from '../CSS/chart.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';

const Chart = () => {
    const [chart, setChart] = useState(null);
    useEffect(() => {
        const Fetch = async () => {
            var response = await fetch("https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=5&api_key=ac93b58817c64de67582b6350184ca24&format=json");
            var chart = await response.json();
            chart = chart?.tracks?.track;
            const info = chart?.map(async (song) => {
                const params = {
                    method: 'album.getInfo',
                    artist: song.artist.name.replace('&', '%26'),
                    album: song.name.replace('&', '%26').replace('+', '%2B'),
                    api_key: 'ac93b58817c64de67582b6350184ca24',
                    format: 'json',
                }
                const url = "https://ws.audioscrobbler.com/2.0/?" + Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
                const response = await fetch(url);
                const info = await response.json();
                return (info)
            })
            const results = await Promise.all(info)
            setChart(results);
        }
        Fetch();
    }, [])
    return (
        <section className={style.chart}>
            <h2 className={style.section_title}>Чарт:</h2>
            <div className={style.chart_container}>
                <div className={style.chart_list}>
                    {chart?.map((charts, index) => (
                        <div className={style.chart_song} key={index}>
                            <p className={style.chart_number}>{index + 1}</p>
                            <div className={style.chart_cover} style={{ backgroundImage: "url(" + charts.album?.image[4]["#text"] + ")" }}>
                            </div>
                            <div className={style.chart_meta}>
                                <Link to={`/artist/${charts.album?.artist}/track/${charts.album?.name}`}><p>{charts.album?.name}</p>
                                    <p>{charts.album?.artist}</p></Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={style.chart_next}><Link to="/chart">Далее</Link></div>
            </div>
        </section>
    )
}

export default Chart