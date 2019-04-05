import React from 'react';
import { Segment, Icon, Button, Image } from 'semantic-ui-react'
import SegmentExamplePlaceholderGrid from './HeaderText'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollLock from 'react-scrolllock'
import Paws from '../assets/images/octopuss-no-background.png'

class HomeShow extends React.Component {

  state = {
    resizeNotifier: () => { },
    lockScroll: true
  }

  render() {
    return (
      <Segment as={HeaderTxt} placeholder>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '9m', alignItems: 'center' }}>
          <Image as={OctoImage} src={Paws} />
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

const OctoImage = styled(Image)`
  width: 50em !important
  height: auto
  justify-content: center !important
  align-items: center !important
`

export default HomeShow;