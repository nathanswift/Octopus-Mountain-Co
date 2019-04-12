import React from 'react'
import styled from 'styled-components'
import HomeShow from '../components/HomeShow'
import { Image, Segment } from 'semantic-ui-react'
import { pulse, slideUp, fadeIn } from '../assets/keyframes/Keyframes'
import { media } from '../themes/media'

export default class Home extends React.Component {
  state = {
    height: window.pageYOffset,
    scrolled: false,
    count: 0,
    count2: 0,
    scrollIcon: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { count, count2, scrollIcon } = this.state
    this.setState({ height: window.pageYOffset })
    setTimeout(() => {
      if (this.state.height > 0 && count2 === 0){
        this.setState({ scrollIcon: !scrollIcon, count2: 1 })
      }
      if (this.state.height > 300 && count === 0) {
        this.setState({ scrolled: true, count: 1, count2: 1})
        window.scrollTo(0, 0)
        console.log('starting scroll')
      } 
      if (this.state.height > 300 && count === 1) {
        window.scrollTo(0, 0)
      } 
    }, 1000)
  }

  render() {
    return (
      <PageBody>
        <div style={{ display: 'flex !important' }}>
          {
            this.state.count === 1 ?
                <HomeShow />
              :
              <>
                <div>
                  <Segment style={{ display: 'flex !important' }}>
                    <HeaderText as="h1" textAlign="center">Octopus Mountain Co.</HeaderText>
                  </Segment>
                </div>
                <div>
                  <HeaderText2 as="h1" textAlign="center">Trust us with your business solutions. Breathe again with Om.</HeaderText2>
                </div>
                <div>
                    {
                      this.state.scrollIcon ? 
                      null
                      :
                      <ScrollIcon>
                        <Image src='https://static.thenounproject.com/png/486805-200.png'/>
                      </ScrollIcon>
                    }
                </div>
              </>
            }
        </div>
      </PageBody>
    )
  }
}

// Make dismount animation for the first two header text components



const HeaderText = styled.div`
  display: flex !important
  justify-content: center
  width: 30% !important
  font-size: 5em 
  font-family: 'Major Mono Display', monospace;
  letter-spacing: .5em 
  margin-left: 4em 
  margin-top: 2em !important
  height: auto
  font-weight: 20em
  animation-name: ${slideUp}
  animation-duration: 5s
  ${media.phone`
    font-size: 1em
  `}
`
const HeaderText2 = styled.div`
  display: flex !important
  align-content: flex-end 
  postion: fixed 
  justify-content: center
  letter-spacing: .2em
  margin-top: 4em !important
  width: 100% !important
`

const ScrollIcon = styled(Image)`
  width: 100%
  height: auto
  display: flex !important
  justify-content: center !important
  align-content: flex-end !imoportant
  position: fixed !important
  animation-name: ${pulse}
  animation-duration: 2s
  animation-iteration-count: infinite
`

const PageBody = styled.div`
  width: 100%
  height: 80em
`