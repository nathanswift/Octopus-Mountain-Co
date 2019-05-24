import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import ScrollLock from "react-scrolllock"
import { AuthConsumer } from "../providers/AuthProvider"
import MenuImg from "../assets/xd/+.svg"
import { Image, Grid, Icon, Header, Container } from "semantic-ui-react"
import ContactForm from "./ContactForm"
import About from "../components/About"
import Services from "../components/Services"
import SidebarHome from "../components/SidebarHome"
import Paws from '../assets/images/octopuss-glow.png'
import blackMenuImg from "../assets/images/OmMenuLogo.png"
import SidebarLanding from '../assets/images/bgservices.svg'

class Sidebars extends React.Component {
  state = {
    visible: false,
    sidebarText: 
      <SidebarHome />,
      lockScroll: false
    }
    
  handleAbout = () => {
    this.setState({
      sidebarText: 
        <About />,
    })
  }
  
  handleServices = () => {
    this.setState({
      sidebarText: 
        <Services />,
    })
  }

  handleContact = () =>
    this.setState({
      sidebarText: 
        <ContactForm toggleMenu={this.toggleMenu} />
    })

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
      lockScroll: !this.state.lockScroll
    })
    window.scrollTo(0, 0);
  }

  onClick = () => {
    this.toggleMenu()
    this.props.auth.handleLogout(this.props.history)
  }

  NavItems = () => {
    const {
      auth: { user }
    } = this.props

    if (user) {
      return (
        <LoginButton name="LogOut" onClick={this.onClick}>
          logOut
        </LoginButton>
      )
    } else {
      return (
        <Link to="/Login">
          <LoginButton onClick={this.toggleMenu} className="btn">
            login
          </LoginButton>
        </Link>
      )
    }
  }

  render() {
    return (
      <>
        <Sidebar style={ this.state.visible ? {display: "inline-block", background: 'white', zIndex: '3', position: 'absolute' } : {display: 'none'} }>
          {this.state.visible ? (
            <>
              <Grid colums="equal" style={{zIndex: '3'}}>
                <Grid.Row col={3}>
                  <Grid.Column>
                    <MenuButton
                    onClick={this.toggleMenu}
                    style={{ display: "flex !important", marginTop: '2%', width: '35px', height: '35px', zIndex: '4' }}
                    >
                      <Image
                      src={MenuImg}
                      style={{ display: 'inline-block', height: "5em", width: "5em", marginLeft: "3em", position: 'absolute', zIndex: '4'}} /* Something with a sticky posititon would be cool here - have paws sliding up into a fixed spot. - Or just an animation*/
                      />
                    </MenuButton>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Image src={Paws} style={{width: '600px', height: 'auto', zIndex: '4', transform: 'translate(-8em, -12.5em)'}}/>
                  </Grid.Column>
                  <Grid.Column>
                  <Link as={ButtonStyle} to='/HomeShow' onClick={this.toggleMenu}>
                    home
                  </Link>
                  <ButtonStyle className="btn" onClick={() => this.handleAbout()}>
                    About
                  </ButtonStyle>
                  <ButtonStyle
                    className="btn"
                    onClick={() => this.handleServices()}
                    >
                    services
                  </ButtonStyle>
                  <Link to='/Works'>
                    <ButtonStyle onClick={this.toggleMenu}>
                      works
                    </ButtonStyle>
                  </Link>
                  <ButtonStyle onClick={() => this.handleContact()}>
                    contAct
                  </ButtonStyle>
                  { this.NavItems() }
                  </Grid.Column>
                </Grid.Row>
                <Grid style={{ display: 'inline-block', background: `url(${SidebarLanding})`, width: '100%', height: '90%', position: 'absolute'}}>
                  <Grid.Row>
                  { this.state.sidebarText }
                  </Grid.Row>
                <Grid.Row col={2}>
                  <Grid.Column width={6}>
                    <Header> Recent Twitter Post</Header>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Header> Recent Twitter Post</Header>
                    <p>
                      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <div> CopyRight @Octopus Mountain Co. </div>
                  </Grid.Column>
                  <Grid.Column width={6}>
                      <Icon 
                        color="black"
                        name="facebook f"
                        size="large"
                        />
                      <Icon 
                        color="black"
                        name="twitter"
                        size="large"
                        />
                      <Icon 
                        color="black"
                        name="github alternate"
                        size="large"
                        />
                      <Icon 
                        color="black"
                        name="linkedin square"
                        size="large"
                        />
                  </Grid.Column>
                </Grid.Row>
                </Grid>
              </Grid> 
            </>
          ) : 
          <MenuButton
          onClick={this.toggleMenu}
          style={{ display: "flex !important", zIndex: '1',  marginTop: '2%' }}
          >
              <Image
              src={blackMenuImg}
              style={{ height: "5em", width: "5em", marginLeft: "3em" }}
              />
            </MenuButton>
          }
          </Sidebar>
        </>
    )
  }
}

class ConnectSidebars extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {value => <Sidebars {...this.props} auth={value} />}
      </AuthConsumer>
    )
  }
}

const Sidebar = styled.div`
  display: flex !important
  color: black !important
  position: absolute !important
  width: 100%
  height: 100%
`
const MenuButton = styled.div`
  position: fixed !important
`

const ButtonStyle = styled.div`
  display: inline-block
  height: auto
  margin-top: 5%
  float: left !important
  font-family: Major Mono Display, monospace; !important
`
const LoginButton = styled.div`
  display: flex !important
  margin-top: 2em
  margin-right: 1em
  height: 6em
  font-family: Major Mono Display, monospace; !important
`

export default withRouter(ConnectSidebars)
