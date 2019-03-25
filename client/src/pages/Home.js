import React from 'react'
import styled from 'styled-components'
import { FaAngleDown } from 'react-icons/fa'


export default class Home extends React.Component {
  state = { scrollTop: 0 }

    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        console.log('Scrolled!')
    }
    

    render() {
        return (
          <div style={{ display: 'flex !important'}}>
            <div style={{ display: 'flex !important' }} onScroll={this.handleScroll} >
                <HeaderText as="h1" textAlign="center">Octopus Mountain Co</HeaderText>
            </div>
            <div style={{ display: 'flex !important' }}> 
              <ScrollIcon>Scroll Down
                <FaAngleDown/>
              </ScrollIcon>
            </div>
          </div>
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

const ScrollIcon = styled.h3`
  display: flex !important
  justify-content: center !important
  align-items: flex-end !important
  margin-top: 20%
  margin-right: 2%
`