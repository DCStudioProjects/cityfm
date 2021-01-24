import React, { Component } from 'react'
import Feed from '../Components/Feed';
import Hero from '../Components/Hero';
import Schedule from '../Components/Schedule';
import Lastsongs from '../Components/Lastsongs';

export default class Home extends Component {
    render() {
        return (
            <>
            <Feed />
            <Hero />
            <Schedule />
            <Lastsongs />
            </>
        )
    }
}