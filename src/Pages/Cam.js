import React, { Component } from 'react'

export default class Cam extends Component {
    render() {
        return (
            <div>
                <h1>Вебкамера</h1>
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100029826813324%2Fvideos%2F482320996105457%2F&show_text=false&width=560" width="560" height="314" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                <p>Не грузит трансляцию? DJ пока не может показать себя, попробуйте чуть позже :(</p>
            </div>
        )
    }
}
