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
    src: 'https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1082/6/155411596/481480321.mp4?token=1554866964-0x0f627ebaf4e11d696ce4660c83a918fd8481f5eb',
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