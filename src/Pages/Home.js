import React, { Component } from 'react'
import Feed from '../Components/Feed';
import Hero from '../Components/Hero';
import OnAir from '../Components/OnAir';
import Lastsongs from '../Components/Lastsongs';

export default class Home extends Component {
    render() {
        return (
            <>
            <Feed />
            <Hero />
            <OnAir />
            <Lastsongs />
            </>
        )
    }
}