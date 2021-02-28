import React, { Component } from 'react'

export default class Cam extends Component {
    render() {
        return (
            <div>
                <h1>Вебкамера</h1>
                <iframe src="https://player.twitch.tv/?channel=danielchistyakov&parent=www.cityfm.gq" title="Вебкамера" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="100%"></iframe>
                <p>Не грузит трансляцию? DJ пока не может показать себя, попробуйте чуть позже :(</p>
            </div>
        )
    }
}
