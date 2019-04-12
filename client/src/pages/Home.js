import React from 'react'
import styled from 'styled-components'
import HomeShow from '../components/HomeShow'
import { Image } from 'semantic-ui-react'
import Paws from '../assets/images/Paws.png'
import { pulse, slideUp, fadeIn } from '../assets/keyframes/Keyframes'

export default class Home extends React.Component {
  state = {
    height: window.pageYOffset,
    scrolled: false,
    count: 0,
    count2: 0
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { count, count2 } = this.state
    this.setState({ height: window.pageYOffset })
    if (this.state.height > 200 && count === 0) {
      window.scrollTo(0, 0)
      this.setState({ scrolled: true, count: 1, count2: 1 })
    } else if (this.state.height > 200 && count === 1) {
      window.scrollTo(0, 0)
    } else if (this.state.height > 190 && count2 === 1) {
      window.scrollTo(0, 0)
      this.setState({ count: 2 })
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  render() {
    return (
      <PageBody>
        <div style={{ display: 'flex !important' }}>
          {(() => {
            switch (this.state.count) {
              case 1: return (
                <div>
                  <div style={{ display: 'hidden !important', position: 'fixed !important', marginTop: '12em' }}>
                    <HeaderText2 as="h1" textAlign="center">Trust us with your business solutions. Breathe again with Om.</HeaderText2>
                  </div>
                </div>
              )
              case 2: return (
                <HomeShow />
                // figure something out here because the two lock scrolls don't work unless the scroll takes you to the /works path
              )
              default: return (
                <div>
                  <div style={{ display: 'flex !important', marginTop: '8em' }}>
                    <HeaderText as="h1" textAlign="center">Octopus Mountain Co</HeaderText>
                  </div>
                    <Image as={OctoImage} src={Paws} />
                  <div style={{ display: 'flex !important', marginTop: '26em' }}>
                    <ScrollIcon>
                      <Image src='https://static.thenounproject.com/png/486805-200.png' />
                    </ScrollIcon>
                  </div>
                </div>
              )
            }
          })()}
        </div>
      </PageBody>
    )
  }
}

// Make dismount animation for the first two header text components


const OctoImage = styled(Image)`
  width: 50em
  height: auto
  opacity: .85
  margin-top: -110em
  margin-left: 27em
  z-index: 1
`

const HeaderText = styled.div`
  display: flex 
  justify-content: center
  width: 100% 
  margin-top: 4em !important
  font-size: 5em 
  letter-spacing: 1.5em 
  text-decoration: bold
  margin-left: 1em
  height: 13em 
  font-weight: 20em
  animation-name: ${slideUp}
  animation-duration: 2s
`
const HeaderText2 = styled.div`
  display: flex !important
  align-items: center !important
  letter-spacing: .2em
  justify-content: center !important
  width: 100% !important
  height: 13.000em !important
  margin: auto !important
  margin-bottom: 12.500em !important
  transform: translate(-2%, 30%)
`

const ScrollIcon = styled(Image)`
  display: flex !important
  justify-content: center !important
  align-items: center !important
  margin-top: -18.2em
  margin-right: 2%
  animation-name: ${pulse}
  animation-duration: 2s
  animation-iteration-count: infinite
`

const PageBody = styled.div`
  width: 100%
  height: 80em
`