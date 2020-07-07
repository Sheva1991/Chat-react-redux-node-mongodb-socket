import React, { useRef, useState, useEffect } from 'react'
import waveSvg from '../../assets/images/wave.svg';
import playSvg from '../../assets/images/play.svg';
import pauseSvg from '../../assets/images/pause.svg';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime';
const aud = require('../../assets/DZZEL.mp3')


const AudioMessage = ({ audioSrc }) => {
    if (audioSrc === null) {
        audioSrc = aud
    }

    const audioElem = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    };

    useEffect(() => {
        audioElem.current.volume = '0.1';
        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true);
            },
            false,
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false);
                setProgress(0);
                setCurrentTime(0);
            },
            false,
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false);
            },
            false,
        );
        audioElem.current.addEventListener('timeupdate', () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress((audioElem.current.currentTime / duration) * 100);
        });
    }, []);

    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div className="message__audio-progress" style={{ width: progress + '%' }} />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause svg" />
                        ) : (
                                <img src={playSvg} alt="Play svg" />
                            )}
                    </button>
                </div>
                <div className="message__audio-wave">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration">{convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    );
};

export default AudioMessage;
