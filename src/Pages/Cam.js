import React, { Component } from 'react'

export default class Cam extends Component {

    state = {

    }
    async componentDidMount() {
        var response = await fetch("https://tangerine.gq/cityfm/d.json");
        const cam = await response.json();
        this.setState({ cam: cam });
    }
    render() {
        return (
            <div>
                <h1>Вебкамера</h1>
                <iframe src={this.state.cam} width="70%" height="400px" frameBorder="0" allowFullScreen></iframe>
                <p>Не грузит трансляцию? DJ пока не может показать себя, попробуйте чуть позже :(</p>
            </div>
        )
    }
}
