import React, { Component } from 'react'
import style from '../CSS/track.module.css';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default class Track extends Component {

    state = {

    }

    async componentDidMount() {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=album.getInfo&artist=${this.props.match.params.artist.replace('&', '%26').replace('(', '%28').replace(')', '%29')}&autocorrect=1&album=${this.props.match.params.name.replace('&', '%26').replace('(', '%28').replace(')', '%29')}&api_key=ac93b58817c64de67582b6350184ca24&format=json`);
        const track = await response.json();
        console.log(response);
        this.setState({ cover: track?.album?.image[4]["#text"] });
    }

    render() {
        return (
            <HelmetProvider>
                <div className={style.track_section}>
                    <Helmet>
                        <title>{this.props.match.params.artist.replace(/%20/g, ' ')} — {this.props.match.params.name.replace(/%20/g, ' ')}</title>
                    </Helmet>
                    <div className={style.track_cover} style={{ backgroundImage: "url(" + this.state.cover + ")" }}></div>
                    <div className={style.track_info}>
                        <h1 className={style.track_title}>{this.props.match.params.name.replace(/%20/g, ' ')}</h1>
                        <Link to={`/artist/${this.props.match.params.artist}`}><h2 className={style.track_artist}>{this.props.match.params.artist.replace(/%20/g, ' ')}</h2></Link>
                        <div className={style.track_listen}>
                            <h3 className={style.listen_title}>Слушать:</h3>
                            <div className={style.listen_service}><a href={`https://vk.com/audios0?q=${this.props.match.params.artist}%20${this.props.match.params.name}&section=my`} target="_blank" rel="noreferrer">VK</a></div>
                            <div className={style.listen_service}><a href={`https://music.youtube.com/search?q=${this.props.match.params.artist}+${this.props.match.params.name}`} target="_blank" rel="noreferrer">Youtube</a></div>
                            <div className={style.listen_service}><a href={`https://music.yandex.ru/search?text=${this.props.match.params.artist}%20${this.props.match.params.name}&type=tracks`} target="_blank" rel="noreferrer">Яндекс Музыка</a></div>
                        </div>
                    </div>
                </div>
            </HelmetProvider>
        )
    }
}
