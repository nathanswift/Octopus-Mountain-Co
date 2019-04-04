import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaDiceD20 } from 'react-icons/fa'
import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { AuthConsumer } from '../providers/AuthProvider';

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

  onClick = () => {
    debugger
    this.toggleMenu()
    this.props.auth.handleLogout(this.props.history)
  }

  NavItems = () => {
    const { auth: { user } } = this.props

    if (user) {
      return (
        <LoginButton
        name="LogOut"
        onClick={this.onClick}
        >LogOut</LoginButton>
      )
    } else {
      return(
        <Link to="/Login">
        <LoginButton onClick={this.toggleMenu} className="btn">Login</LoginButton>
        </Link>
      )
    }
  }


  render() {
    // const { visible } = this.state


    return (
      <Fragment>
        <Sidebar style={{ display: 'flex !important'}}>
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
              { this.NavItems()}
            </SideBarStyles>
        :
            null
        }
          <MenuButton onClick={this.toggleMenu}  style={{ display: 'flex !important'}}>
                <FaDiceD20 style={{ height: '2em', width: '2em', marginLeft: '1em'}}/>
          </MenuButton>
        </Sidebar>
        <ScrollLock isActive={this.state.lockScroll} />
      </Fragment>
    )
  }
}

class ConnectSidebars extends React.Component {

  render() {
    return(
      <AuthConsumer>
        { value => 
          <Sidebars { ...this.props } auth={value}/>
        }
      </AuthConsumer>
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
  margin-top: -0.49em
  margin-left: -0.5em
  width: 100% !important
  height: 950px
`
const MenuButton = styled.div`
  margin-top: 2em
  position: fixed !important
  z-index: 2
`

const SidebarTitle = styled.h2`
  width: 20em
  transform: translate(-33em, 10em) rotate(90deg)
`

const ButtonStyle = styled.div`
  display: flex !important
  border: 1px solid black
  width: 10.4em
  height: 3em
  transform: translate(3.59em, 12em)
`
const SidebarText = styled.div`
  display: flex !important
  border: 1px solid black
  width: 32em
  height: 27em
  margin-top: 18em
  transform: translate(-80%)
`
const LoginButton = styled.div`
  display: flex !important
  align-items: center
  justify-content: center
  border: .1em solid black
  width: 6em
  height: 4em
`


export default withRouter(ConnectSidebars)
