import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ScrollLock from 'react-scrolllock'


class HomeShow extends React.Component {
  state = { lockScroll: true }

  render () {
    return (
      <div>
        <Link to='/Works' style={{display: 'flex !important'}}>
          <OctopusImage src="https://c8.alamy.com/comp/P53PKY/octopus-arm-with-tentacles-on-a-slate-board-P53PKY.jpg" alt="" />
        </Link>
        <Link to='/Login' style={{display: 'flex !important'}}>
          <CatImage src="https://image.shutterstock.com/z/stock-photo-cat-s-arm-raised-paw-isolated-on-white-138895601.jpg" alt=""/>
        </Link>
        <ScrollLock isActive={this.state.lockScroll} />
      </div>
    )
  }
} 

const CatImage = styled.img`
  display: flex !important
  width: 15%  
  height: 300px
  transform: translate(200%, 150px)
  `
  const OctopusImage = styled.img`
  display: flex !important
  width: 200px
  height: 300px
  justify-content: center
  transform: translate(400px)
  `

export default HomeShow