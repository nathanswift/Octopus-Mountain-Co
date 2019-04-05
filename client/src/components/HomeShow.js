import React from 'react';
import { Segment, Icon, Button, Image, Grid } from 'semantic-ui-react'
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
      <Segment as={HeaderTxt} placeholder>
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
              <ScrollLock isActive={this.state.lockScroll} />
            </Grid.Column>
          </Grid.Row>
        </GridStyles>
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
  opacity: .85
  justify-content: center !important
  align-items: center !important
  transform: translate(-2em)
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