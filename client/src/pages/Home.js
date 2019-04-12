import React from 'react'
import styled from 'styled-components'
import HomeShow from '../components/HomeShow'
import { Image } from 'semantic-ui-react'
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

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }

  handleScroll = () => {
    const { count, count2, scrollIcon } = this.state
    this.setState({ height: window.pageYOffset })
    setTimeout(() => {
      if (this.state.height > 0 && count2 === 0){
        this.setState({ scrollIcon: !scrollIcon, count2: 1 })
      }
      if (this.state.height > 1100 && count === 0) {
        window.scrollTo(0, 0)
        this.setState({ scrolled: true, count: 1, count2: 1})
        console.log('starting scroll')
      } 
      if (this.state.height > 300 && count === 1) {
        window.scrollTo(0, 0)
      } 
    }, 2000)
  }

  render() {
    return (
      <PageBody>
        <div style={{ display: 'flex !important' }}>
          {
            this.state.count === 1 ?
                <HomeShow />
              :
                <div>
                  <div style={{ display: 'flex !important', marginTop: '8em' }}>
                    <HeaderText as="h1" textAlign="center">Octopus Mountain Co</HeaderText>
                  </div>
                  <div>
                    {
                      this.state.scrollIcon ? 
                        null
                      :
                      <ScrollIcon>
                        <ImageStyle src='https://static.thenounproject.com/png/486805-200.png'/>
                      </ScrollIcon>
                    }
                  </div>
                  <div>
                  <div style={{ position: 'relative !important', marginTop: '-40em !important'}}>
                    <HeaderText2 as="h1" textAlign="center">Trust us with your business solutions. Breathe again with Om.</HeaderText2>
                  </div>
                </div>
                </div>
            }
        </div>
      </PageBody>
    )
  }
}

// Make dismount animation for the first two header text components



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
  ${media.phone`
    font-size: 1em
  `}
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
const ImageStyle = styled(Image)`
  transform: translate(0, -50em) !important
`