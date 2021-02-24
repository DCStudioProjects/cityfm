import React, { Component } from 'react'
import style from '../CSS/artist.module.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default class Track extends Component {

    state = {

    }

    async componentDidMount() {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${this.props.match.params.artist.replace('&', '%26')}&autocorrect=1&api_key=ac93b58817c64de67582b6350184ca24&format=json`);
        const artist = await response.json();
        console.log(artist);
        this.setState({ artist: artist.artist })
    }

    render() {
        return (
            <HelmetProvider>
                <div className={style.artist_section}>
                    <Helmet>
                        <title>{this.props.match.params.artist}</title>
                    </Helmet>
                    <div className={style.artist_photo} style={{ backgroundImage: "url(" + this.state.artist?.image[4]["#text"] + ")" }}></div>
                    <p>{this.state.artist?.name}</p>
                    <p>{this.state.artist?.bio.content}</p>
                    <p>Жанры:</p>
                    {this.state.artist?.tags?.tag?.map(genres => (
                        <p key={1}>{genres.name}</p>
                    )
                    )}
                </div>
            </HelmetProvider>
        )
    }
}
