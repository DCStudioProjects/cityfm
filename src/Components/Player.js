import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
<section className="audio_player">
	<audio controls>
		<source src="http://stream.laut.fm/city" type="audio/mpeg" />
		<source src="http://stream.laut.fm/city" type="audio/ogg" />
        Ваш браузер не поддерживается
    </audio>
	<iframe src="https://cityfm.gq/player.php"></iframe>
</section>
        )
    }
}
