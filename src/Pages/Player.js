import React, { Component } from 'react'
import style from '../CSS/pleer.module.css';
import Controls from '../Components/Controls'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Schedule from '../Components/Schedule';

export default class Player extends Component {

    state = {

    }

    async componentDidMount() {
        const response1 = await fetch('https://api.laut.fm/station/city/current_song')
        const curmeta = await response1.json();
        this.setState({ title: curmeta.title, artist: curmeta.artist.name });
        const name = curmeta.live === true ? curmeta.title : curmeta.album
        const response2 = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=${curmeta.artist.name.replace('&', '%26').replace('%', '%25').replace('(', '%28').replace(')', '%29')}&album=${name.replace('&', '%26').replace('%', '%25').replace('(', '%28').replace(')', '%29')}&autocorrect=1&api_key=ac93b58817c64de67582b6350184ca24&format=json`);
        const curcover = await response2.json();
        this.setState({ cover: curcover?.album?.image[4]["#text"] });
    }

    render() {
        return (
            <section className={style.player}>
                <div className={style.song_info}>
                    <div className={style.song_cover} style={{ backgroundImage: `url(${this.state.cover})` }}>
                    </div>
                    <div className={style.play_info}>
                        <div className={style.song_meta}>
                            <Controls />
                            <Link to={`/artist/${this.state.artist}/track/${this.state.title}`}><p className={style.song_meta}>{this.state.title}</p></Link>
                            <Link to={`/artist/${this.state.artist}`}><p className={style.song_meta}>{this.state.artist}</p></Link>
                        </div>
                        <div className={style.track_listen}>
                            <h3 className={style.listen_title}>Слушать:</h3>
                            <div className={style.listen_service}><a href={`https://vk.com/audios0?q=${this.props.match.params.artist}%20${this.props.match.params.name}&section=my`} target="_blank" rel="noreferrer">VK</a></div>
                            <div className={style.listen_service}><a href={`https://music.youtube.com/search?q=${this.props.match.params.artist}+${this.props.match.params.name}`} target="_blank" rel="noreferrer">Youtube</a></div>
                            <div className={style.listen_service}><a href={`https://music.yandex.ru/search?text=${this.props.match.params.artist}%20${this.props.match.params.name}&type=tracks`} target="_blank" rel="noreferrer">Яндекс Музыка</a></div>
                        </div>
                    </div>
                </div>
                <Schedule />
            </section>
        )
    }
}
