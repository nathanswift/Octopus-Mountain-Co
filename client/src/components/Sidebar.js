import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaDiceD20 } from 'react-icons/fa'
import ScrollLock, { TouchScrollable } from 'react-scrolllock'

class Sidebars extends React.Component {
   state = { visible: false, sidebarText: '', lockScroll: false }

  handleAbout = () => {
    console.log('About')
  }

  handleServices = () => {
    console.log('Services')
  }

  handleContact = () => {
    console.log('Contact Info')
  }

  toggleMenu = () => this.setState({ visible: !this.state.visible, lockScroll: !this.state.lockScroll })

  render() {
    // const { visible } = this.state


    return (
      <Fragment>
        <Sidebar style={{ display: 'flex !important'}}>
          {
            this.state.visible ?
            <SideBarStyles style={{display: 'flex !important'}} className="container">
              <SidebarTitle>Octopus Mountain Co</SidebarTitle>
              <ButtonStyle className="btn"
                onClick={() => this.handleAbout()}
              >About   |</ButtonStyle>
              <ButtonStyle className="btn"
                onClick={() => this.handleServices()}  
              >Services   |</ButtonStyle>
              <ButtonStyle className="btn"
                onClick={() => this.handleContact()}
              >Contact</ButtonStyle>
              <SidebarText style={{display: 'flex !important'}}>
                {this.state.sidebarText}
              </SidebarText>
            </SideBarStyles>
        :
            null
        }
          <MenuButton onClick={this.toggleMenu} style={{ display: 'flex !important'}}>
              <FaDiceD20 style={{ height: '50px', width: '50px'}}/>
          </MenuButton>
        </Sidebar>
        <ScrollLock isActive={this.state.lockScroll} />
      </Fragment>
    )
  }
}

const Sidebar = styled.div`
  display: flex !important
  width: 60% !important
  height: max-content
`
const SideBarStyles = styled.div`
  display: flex
  border: 1px solid black !important
  margin-top: -8px
  margin-left: -8px
  width: 100% !important
  height: 950px
`
const MenuButton = styled.div`
  margin-top: 30px
`

const SidebarTitle = styled.h2`
  width: 400px
  transform: translate(-530px, 100px) rotate(90deg)
`

const ButtonStyle = styled.div`
  display: flex !important
  border: 1px solid black
  width: 100px
  height: 60px
  transform: translate(-75px, 150px)
`
const SidebarText = styled.div`
  display: flex !important
  border: 1px solid black
  width: 500px
  height: 400px
  margin-top: 300px
  transform: translate(-80%)
`


export default Sidebars
