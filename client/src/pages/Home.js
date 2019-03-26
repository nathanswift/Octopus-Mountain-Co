import React from 'react'
import styled from 'styled-components'
import { FaAngleDown, FaFacebookF, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'


export default class Home extends React.Component {
  state = {
    height: window.pageYOffset,
    scrolled: false
  }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
      this.setState({ height: window.pageYOffset })
        if (this.state.height > 200) {
          window.scrollTo(0,0)
          this.setState({ scrolled: true})
        }
      }


    // if !scrollTop render the next home page snippet and hide scroll down option - set to hidden to keep page position 
    // else if the scrollTop is hitting on the initial homepage - make the scroll icon pulse
    // if scrollTop go back to the last code snippet
    

  render() {
    return (
      <PageBody>
        <div style={{ display: 'flex !important' }}>
          {this.state.scrolled ?
            <div>
              <div style={{ display: 'hidden !important', position: 'fixed !important' }}>
                <HeaderText2 as="h1" textAlign="center">Something about having peace in business choices om lalala</HeaderText2>
              </div>
            </div>
            :
            <div>
            <div style={{ display: 'flex !important' }}>
              <HeaderText as="h1" textAlign="center">Octopus Mountain Co</HeaderText>
            </div>
            <div style={{ display: 'flex !important' }}>
              <ScrollIcon>Scroll Down
                <FaAngleDown />
              </ScrollIcon>
            </div>
          </div>
          }
          <Footer style={{display: 'flex !important'}}>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
          </Footer>
        </div>
      </PageBody>
    )
  }
}

const HeaderText = styled.div`
  display: flex !important
  align-items: center !important
  justify-content: center !important
  width: 100% !important
  height: 300px !important
  margin: auto !important
  transform: translate(-2%, 30%)
`
const HeaderText2 = styled.div`
  display: flex !important
  align-items: center !important
  justify-content: center !important
  width: 100% !important
  height: 400px !important
  margin: auto !important
  margin-bottom: 200px !important
  transform: translate(-2%, 30%)
`

const ScrollIcon = styled.h3`
  display: flex !important
  justify-content: center !important
  align-items: flex-end !important
  margin-top: 20%
  margin-right: 2%
`

const PageBody = styled.div`
  width: 100%
  height: 2000px
`

const Footer = styled.table`
  width: 100%
  display: flex !important
  align-content: flex-end !important
  justify-content: center !important
  margin-left: -20px
  transform: translate(0, 100px)
`