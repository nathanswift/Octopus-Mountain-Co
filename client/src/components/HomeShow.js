import React from 'react';
import { Segment, Icon, Button, Image, Grid, Header } from 'semantic-ui-react'
import SegmentExamplePlaceholderGrid from './Video'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollLock from 'react-scrolllock'
import Paws from '../assets/images/octopuss-glow.png'
import Nature from "../assets/audio/himalaya-naturesounds.mp3"
import blackMenuImg from "../assets/images/OmMenuLogo.png"

class HomeShow extends React.Component {

  state = {
    resizeNotifier: () => { },
    lockScroll: true,
  }

  render() {

    return (
      <>
        <Segment as={SegmentStyles} placeholder>
        <Image src={blackMenuImg} style={{ width: '40px', height: '40px'}}/>
        <HeaderText as="h1" textAlign="center" style={{ marginBottom: '5%', zIndex: '1'}}>Octopus MountAin Co. | development & design</HeaderText>
          <GridStyles stackable col={2}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Image as={OctoImage} src={Paws} style={{ zIndex: '1'}}/>
            </div>
            <div style={{width: '20%'}}>
              <Link to='/Works'>
                  <ButtonStyle animated inverted size='massive' style={{ marginBottom: '1em', color: '#AAC0EB', border: '5px solid #AAC0EB', borderRadius: '6%'}}>
                    <Button.Content visible>Works</Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow right' />
                    </Button.Content>
                  </ButtonStyle>
                </Link>
                <Link to='/Login'>
                    <ButtonStyle animated size='massive' style={{ color: '#AAC0EB', border: '5px solid #AAC0EB', borderRadius: '6%'}}>
                      <Button.Content visible>Dashboard</Button.Content>
                      <Button.Content hidden>
                        <Icon name='arrow left' />
                      </Button.Content>
                    </ButtonStyle>
                  </Link>
                <div>
                  <audio ref="audio_tag" src={Nature} autoPlay controls/>
                </div>
            </div>
          </GridStyles>
              <SegmentExamplePlaceholderGrid />
          {/*<ScrollLock isActive={this.state.lockScroll} />*/}
      </Segment>
      </>
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
  opacity: 1 !important
  font-family: Brothers OT, sans-serif;
  font-weight: 700;
  font-style: normal;
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
const ButtonStyle = styled(Button)`
  display: flex !important
  background: transparent !important
  border: none !important
  box-shadow: none !important
`

export default HomeShow;