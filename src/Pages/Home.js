import React, { Component } from 'react'
import Feed from '../Components/Feed';
import Schedule from '../Components/Schedule';
import Lastsongs from '../Components/Lastsongs';
import Helmet from "react-helmet";

export default class Home extends Component {
    render() {
        return (
            <>
            <Helmet>
                <title>City FM — слушать радио онлайн бесплатно</title>
            </Helmet>
            <Feed />
            <Schedule />
            <Lastsongs />
            </>
        )
    }
}