import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaDiceD20 } from 'react-icons/fa'
import ScrollLock from 'react-scrolllock'

class Sidebars extends React.Component {
   state = { visible: false,
             sidebarText: `Bringing a sense of peace to all your business needs! Choose OM`,
             lockScroll: false
  }

  handleAbout = () => {
    this.setState({ sidebarText: `This is our About info`})
  }

  handleServices = () => {
    this.setState({ sidebarText: 'These are our services'})
  }

  handleContact = () => {
    this.setState({ sidebarText: `This is our contact info.`})
  }

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible, lockScroll: !this.state.lockScroll })
  }

  render() {
    // const { visible } = this.state


    return (
      <Fragment>
        <Sidebar  style={{ display: 'flex !important'}}>
          {
            this.state.visible ?
            <SideBarStyles style={{display: 'flex !important'}} className="container">
              <SidebarTitle onClick={this.toggleMenu} as={Link} to={'/'} style={{textDecoration: 'none'}}>Octopus Mountain Co</SidebarTitle>
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
              {/* Insert if else logic to say that if the login containes a token than display the user name */}
              <Link to="/Login">
              <LoginButton onClick={this.toggleMenu} className="btn">Login</LoginButton>
              </Link>
            </SideBarStyles>
        :
            null
        }
          <MenuButton onClick={this.toggleMenu}  style={{ display: 'flex !important'}}>
              <FaDiceD20 style={{ height: '30px', width: '30px', marginLeft: '20px'}}/>
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
  z-index: 2
  border: 1px solid black !important
  margin-top: -8px
  margin-left: -8px
  width: 100% !important
  height: 950px
`
const MenuButton = styled.div`
  margin-top: 30px
  position: fixed !important
  z-index: 2
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
const LoginButton = styled.div`
display: flex !important
  border: 1px solid black
  width: 100px
  height: 60px
`


export default Sidebars
