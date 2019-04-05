import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaDiceD20 } from 'react-icons/fa'
import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { AuthConsumer } from '../providers/AuthProvider';
import MenuImage from '../assets/images/OmLogo.svg'
import { Image } from 'semantic-ui-react'

class Sidebars extends React.Component {
   state = { visible: false,
             sidebarText: `Bringing a sense of peace to all your business needs! Choose OM Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.`,
             lockScroll: false
  }

  handleAbout = () => {
    this.setState({ sidebarText: `Development and Design Firm located in Salt Lake City Utah. When we're not crushing deadlines we're usually playing in the snow! We created this company to bring back peace of mind to business and to create an equal space of give and take. Our business is ran from philathanthropy, ethics, and openness. With every website built from Om we will give back to a local or global charity of your choice.`})
  }

  handleServices = () => {
    this.setState({ sidebarText: 'These are our services'})
  }

  handleContact = () => {
    this.setState({ sidebarText: `This is our contact info.`})
  }

  toggleMenu = () => {
    this.setState({ visible: !this.state.visible, lockScroll: !this.state.lockScroll })
    window.scrollTo(0, 0)
  }

  onClick = () => {
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
              >About</ButtonStyle>
              <ButtonStyle className="btn"
                onClick={() => this.handleServices()}  
              >Services</ButtonStyle>
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
                <Image src={MenuImage} style={{ height: '5em', width: '5em', marginLeft: '3em'}}/>
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
  width: 58em
  height: max-content
`
const SideBarStyles = styled.div`
  display: flex
  z-index: 2
  margin-top: -0.49em
  margin-left: -0.5em
  width: 100% !important
  height: 80em
`
const MenuButton = styled.div`
  margin-top: 2em
  position: fixed !important
  z-index: 2
`

const SidebarTitle = styled.h2`
  width: 20em
  transform: translate(-40em, 10em) rotate(90deg)
`

const ButtonStyle = styled.div`
  display: flex !important
  width: 10.4em
  height: 3em
  transform: translate(10em, 20em)
`
const SidebarText = styled.div`
  display: flex !important
  text-align: center !important
  align-items: center !important
  width: 32em
  height: 20em
  margin-top: 16em
  transform: translate(-10em, 7em)
`
const LoginButton = styled.div`
  display: flex !important
  align-items: center
  justify-content: center
  width: 8em
  height: 6em
`


export default withRouter(ConnectSidebars)
