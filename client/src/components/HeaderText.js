import React from 'react'
import styled from 'styled-components'
import VideoCover from 'react-video-cover'

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
    src: 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/177/6/150885292/462343670.mp4?token=1555043664-0xef2fbd5ac0331c65cdf13fba18a2206fd848b230',
    autoPlay: true,
    loop: true,
    muted: true
};
const style = {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    opacity: .9,
    margin: 'auto',
    top: '0vh',
    left: '0vw',
    zIndex: -2,
};

const onHover = () => {
    document.getElementById('video-btn').style('color: white')
}

export default SegmentExamplePlaceholderGrid