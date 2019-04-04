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
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
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
    zIndex: -2,
};

const onHover = () => {
    document.getElementById('video-btn').style('color: white')
}

export default SegmentExamplePlaceholderGrid