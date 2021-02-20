import React, { Component } from 'react'
import Feed from '../Components/Feed';
import Schedule from '../Components/Schedule';
import Lastsongs from '../Components/Lastsongs';
import Chart from '../Components/Chart';
import { BrowserRouter as Route } from 'react-router-dom';
import Artist from './Artist';
import Track from './Track';

import { Helmet, HelmetProvider } from 'react-helmet-async';

export default class Home extends Component {
    render() {
        return (
            <>
                <HelmetProvider>
                    <Helmet>
                        <title>City FM — слушать радио онлайн бесплатно</title>
                    </Helmet>
                    <Feed />
                    <Schedule />
                    <Lastsongs />
                    <Chart />
                    <Route exact path="/artist/:artist" component={Artist} />
                    <Route path="/artist/:artist/track/:name" component={Track} />
                </HelmetProvider>
            </>
        )
    }
}