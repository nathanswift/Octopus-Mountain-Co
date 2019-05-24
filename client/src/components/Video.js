import React from 'react'
import styled from 'styled-components'
import VideoCover from 'react-video-cover'
import { fadeIn } from '../assets/keyframes/Keyframes'

const SegmentExamplePlaceholderGrid = () => (
    <div style={style}>
        <VideoCover
            videoOptions={videoOptions}
            remeasureOnWindowResize
            getResizeNotifier={resizeNotifier => {
                this.setState({
                    resizeNotifier,
                });
            }}
        />
    </div>
)

const videoOptions = {
    src: 'https://res.cloudinary.com/dcxpy4puv/video/upload/v1555637691/FoggyLandscape.mp4',
    autoPlay: true,
    loop: true,
    muted: true
};
const style = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    margin: 'auto',
    top: '0vh',
    left: '0vw',
};


const onHover = () => {
    document.getElementById('video-btn').style('color: white')
}

export default SegmentExamplePlaceholderGrid