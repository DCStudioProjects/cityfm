import React, { Component } from 'react'

export default class Cam extends Component {
    render() {
        return (
            <div>
                <h1>Вебкамера</h1>
                <iframe src="https://vk.com/video_ext.php?oid=-202668736&id=456239023&hash=35b99a445d692283" width="70%" height="400px" frameborder="0" allowfullscreen></iframe>
                <p>Не грузит трансляцию? DJ пока не может показать себя, попробуйте чуть позже :(</p>
            </div>
        )
    }
}
