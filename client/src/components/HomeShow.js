import React from 'react';
import { Segment, Icon, Button } from 'semantic-ui-react'
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '9m', alignItems: 'center' }}>
          <img as={OctoImage} centered src='https://i.pinimg.com/originals/0e/8f/e5/0e8fe5dac3d7bdb5e3bd58d7491ba310.jpg' />
        </div>
        <Button.Group style={{justifyContent: 'center'}}>
          <Link to='/Works'>
            <Button animated color='green'>
              <Button.Content visible>Works</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Link>
          <Link to='/Login'>
            <Button animated color='blue'>
              <Button.Content visible>Dashboard</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Link>
        </Button.Group>
        <SegmentExamplePlaceholderGrid />
        <ScrollLock isActive={this.state.lockScroll} />
      </Segment>
    );
  }
}

const HeaderTxt = styled(Segment)`
  position: absolute !important
  width: 100%
  height: 100%
  background: transparent !important
  display: flex
  border: none !important
`

const OctoImage = styled.div`
  justify-content: center !important
  align-items: center !important
  height: 5em
  // transform: translate(230%, 225px)
`

export default HomeShow;