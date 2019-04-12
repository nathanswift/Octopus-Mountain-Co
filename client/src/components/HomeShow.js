import React from 'react';
import { Segment, Icon, Button, Image, Grid, Header } from 'semantic-ui-react'
import SegmentExamplePlaceholderGrid from './HeaderText'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollLock from 'react-scrolllock'
import Paws from '../assets/images/octopuss-glow.png'

class HomeShow extends React.Component {

  state = {
    resizeNotifier: () => { },
    lockScroll: true
  }

  render() {
    return (
      <Segment as={SegmentStyles} placeholder>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '8m', alignItems: 'center' }}>
          <Image as={OctoImage} src={Paws} />
        </div>
        <GridStyles stackable col={2}>
          <Grid.Row>
            <Grid.Column>
            <Link to='/Works'>
              <Button animated secondary>
                <Button.Content visible>Works</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
            </Link>
            </Grid.Column>
            <Grid.Column>
              <Link to='/Login'>
                <Button animated >
                  <Button.Content visible>Dashboard</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              </Link>
              <SegmentExamplePlaceholderGrid />
            </Grid.Column>
          </Grid.Row>
        </GridStyles>
        <HeaderText as="h1" textAlign="center">O M Co.</HeaderText>
        <ScrollLock isActive={this.state.lockScroll} />
      </Segment>
    );
  }
}

const SegmentStyles = styled(Segment)`
  position: absolute !important
  width: 100%
  font-family: 'Major Mono Display', monospace;
  height: 100%
  background: transparent !important
  display: flex
  border: none !important
`
const HeaderText = styled(Header)`
  display: flex !important
  justify-content: center !important
  align-items: flex-end !important
  font-family: 'Major Mono Display', monospace;
`

const OctoImage = styled(Image)`
  display: flex !important
  width: 30em !important
  align-items: center 
  height: auto
  opacity: .85
  justify-content: center !important
`
const GridStyles = styled(Grid)`
  width: auto
  height: auto
  display: flex !important
  flex-wrap: wrap !important
  justify-content: center !important
  align-items: center !important
`


export default HomeShow;