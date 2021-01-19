import React, { Component } from 'react'
import Feed from '../Components/Feed';
import Hero from '../Components/Hero';
import Lastsongs from '../Components/Lastsongs';
import OnAir from '../Components/OnAir';

export default class Home extends Component {
    render() {
        return (
            <>
            <Feed />
            <Hero />
            <Lastsongs />
            <OnAir />
            </>
        )
    }
}