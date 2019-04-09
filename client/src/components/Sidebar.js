import React, {Fragment} from 'react'
import { Link, withRouter } from 'react-router-dom'
import { FaDiceD20 } from 'react-icons/fa'
import styled from 'styled-components'
import ScrollLock from 'react-scrolllock'
import { AuthConsumer } from '../providers/AuthProvider';
import MenuImage from '../assets/images/OmLogo.svg'
import { Button, Form, Message, Image } from 'semantic-ui-react'

class Sidebars extends React.Component {
   state = { visible: false,
             sidebarText: `Octopus Mountain Co is a small startup firm based out of Salt Lake City Utah. We crush deadlines and shred powder.
              Never been afraid to go where no man has gone before. Doing the impossible. Okay, so we might be milking this a bit, but if
               you're looking for quality design, functional mobile and web applications, and helping secure your place on the google hierarchy
                and raise your presence on the web then we're your guys! Based out of Salt Lake City and as long the snow keeps coming 
                down, we'll keep coming up with creative solutions to your business needs. So Relax. We got this. Breath with Om.`,
             lockScroll: false
  }

  handleAbout = () => {
    this.setState({ sidebarText: `Octopus Mountain Co is a small startup firm based out of Salt Lake City Utah. We crush deadlines and shred powder.
     Never been afraid to go where no man has gone before. Doing the impossible. Okay, so we might be milking this a bit, but if you're
      looking for quality design, functional mobile and web applications, and helping secure your place on the google hierarchy and raise
       your presence on the web then we're your guys! Based out of Salt Lake City and as long the snow keeps coming down, we'll keep
       coming up with creative solutions to your business needs. So Relax. We got this. Breath with Om.`})
  }

  handleServices = () => {
    this.setState({ sidebarText: `We offer full website services from Design to Implementation. Using full frameworks and database 
    architecture we can build you're website from the ground up! Need to interact better with clients or your team? Need a great logo, graphic design, 
    or to build your presence on social media? Want to build an app, revamp your website, or build one from scratch?
    Have a great Idea that you want to take to a global platform? 
     We can help. No project is too big!`})
  }

  handleContact = () => (
    this.setState({ sidebarText:
        <Form success>
          <h3> Octopus Mountain Co </h3>
          <h3> Salt Lake City, Ut </h3>
          <h3> nswiftnswift@gmail.com </h3>
          <Form.Input label='Email' placeholder='joe@schmoe.com' />
          <Message success header='Form Completed' content="You're all signed up for the newsletter" />
          <Button>Submit</Button>
        </Form>
    })
  )

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
              <ButtonStyle
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
