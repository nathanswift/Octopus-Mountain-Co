import React from 'react';
import { Segment, Image, Button } from 'semantic-ui-react'
import SegmentExamplePlaceholderGrid from './HeaderText'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollLock from 'react-scrolllock'

class HomeShow extends React.Component {

  state = {
    resizeNotifier: () => { },
    lockScroll: true
  }

  render() {
    return (
      <Segment as={HeaderTxt} placeholder>
        <Image as={CatImage} centered src='https://i.pinimg.com/originals/0e/8f/e5/0e8fe5dac3d7bdb5e3bd58d7491ba310.jpg' />
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '15em'}}>
          <Link to='/Works'>
            <Button floated='left' color='green'>Works</Button>
          </Link>
          <Link to='/Login'>
            <Button floated='right' color='blue'>Dashboard</Button>
          </Link>
        </div>
        <SegmentExamplePlaceholderGrid />
        <ScrollLock isActive={this.state.lockScroll} />
      </Segment>
    );
  }
}

const HeaderTxt = styled(Segment)`
  position: absolute !important
  width: 100%
  background: transparent !important
  border: none !important
`

const CatImage = styled.div`
  display: flex !important
  width: 15%  
  height: 18em
  transform: translate(230%, 225px)
`

export default HomeShow;