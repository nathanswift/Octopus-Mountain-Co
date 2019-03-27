import React from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'
import Works from './Works'


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
          window.scrollTo(0,0)
          this.setState({ scrolled: true, count: 1, count2: 1})
        } else if (this.state.height > 200 && count === 1) {
          window.scrollTo(0,0)
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
                <div style={{ display: 'hidden !important', position: 'fixed !important' }}>
                  <HeaderText2 as="h1" textAlign="center">Something about having peace in business choices om lalala</HeaderText2>
                </div>
              </div>
            )
            case 2:  return ( 
              <Works />
              )
            default: return(
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
            )
          }
          })()}
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
  height: 1000px
`