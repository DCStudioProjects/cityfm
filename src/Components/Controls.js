import React, { useRef, useState, useEffect } from 'react'
import style from '../CSS/player.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const Controls = () => {

    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [statevolume, setStateVolume] = useState(0.75);
    

    const setVolume = (q) => {
        audioEl.current.volume = q;
    }

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
        } else {
            audioEl.current.pause();
        }

        setVolume(statevolume);
    });

    return (
        <div className={style.controls}>
        <span className={style.play_icon} onClick={() => setIsPlaying(!isPlaying)}>
            <audio ref={audioEl} src="https://stream.laut.fm/city">
            </audio>
            <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </span>
        <div className={style.section_volume}>
        <span className={style.volume_active}>
        <span style={{width: statevolume * 100 + "%"}}></span>
        </span>
        <span className={style.volume_info} style={{left: statevolume * 100 + "%"}}>{Math.round(statevolume * 100)}</span>
        <input type="range" className= "volume" value={Math.round(statevolume * 100)} onChange={(e) => setStateVolume(e.target.value / 100)}></input>
        </div>
        </div>
    )
}
    
export default Controls