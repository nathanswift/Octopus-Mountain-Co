import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"
import ScrollLock from "react-scrolllock"
import { AuthConsumer } from "../providers/AuthProvider"
import MenuImg from "../assets/images/OmLogo.svg"
import { Image, Container, Grid, Icon, Segment, Header } from "semantic-ui-react"
import ContactForm from "./ContactForm"
import ProfileImage from '../assets/images/NoHair-min.png'
import { media } from '../themes/media'
import WhiteMenuImg from "../assets/images/OmLogo-white.png"
import MountainImg from "../assets/images/mountains.png"

class Sidebars extends React.Component {
  state = {
    visible: false,
    sidebarText: 
      <ContainerStyles inverted>Hey whats going on</ContainerStyles>,
      lockScroll: false
    };
    
    handleAbout = () => {
      this.setState({
        sidebarText: 
        <ContainerStyles inverted>
          <Grid columns={3}>
            <Grid.Column>
              <Grid rows={2} columns={3}>
                <Grid.Row>
                  <Image src={MountainImg} 
                    style={{ width: '100%', height: '95%', marginTop: '10%', marginLeft: '5%', paddingRight: '5%'}}
                  />
                </Grid.Row>
                <Grid.Row columns={3} style={{ marginTop: '10%'}}>
                  <Grid.Column>
                    <InstagramPicture src="https://b-i.forbesimg.com/johnhall/files/2013/09/0318_biz-plans-eager-team_380x2781.jpg" />
                  </Grid.Column>
                  <Grid.Column>
                    <InstagramFrontPic src="https://b-i.forbesimg.com/johnhall/files/2013/09/0318_biz-plans-eager-team_380x2781.jpg" />
                  </Grid.Column>
                  <Grid.Column>
                    <InstagramPicture src="https://b-i.forbesimg.com/johnhall/files/2013/09/0318_biz-plans-eager-team_380x2781.jpg" />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <HeaderStyle>Story 0.1</HeaderStyle>
              <HeaderTitle>the om origin</HeaderTitle>
              <HeaderStyle>
                A long time ago in a far away land, a group of talented developers had the thought - why work for a development firm when we could build one ourselves?
                it was no easy task but the developers pressed on hoping that one day they too could bring peace to peoples business solutions.
                after many long nights the developers had done it.
                with a gleam in the eye of every developer they forged their alliance. an alliance that today we are proud to call the <br/> octopus Mountain CO.
              </HeaderStyle>
              <HeaderP>
                Octopus Mountain Co is a small startup firm based out of Salt Lake City Utah. We crush deadlines and shred powder.
                Never been afraid to go where no man has gone before. Doing the impossible. Okay, so we might be milking this a bit, but if you're
                looking for quality design, functional mobile and web applications, and helping secure your place on the google hierarchy and raise
                your presence on the web then we're your guys! Based out of Salt Lake City and as long the snow keeps coming down, we'll keep
                coming up with creative solutions to your business needs. So Relax. We got this. Breath with Om.
              </HeaderP>
            </Grid.Column>
            <Grid.Column>
              <ProfileStyle src={ProfileImage} />
            </Grid.Column>
          </Grid>
        </ContainerStyles>,
    });
  };
  
  handleServices = () => {
    this.setState({
      sidebarText: 
      <ContainerStyles inverted>We offer full website services from Design to Implementation. Using full frameworks and database 
      architecture we can build you're website from the ground up! Need to interact better with clients or your team? Need a great logo, graphic design, 
      or to build your presence on social media? Want to build an app, revamp your website, or build one from scratch?
      Have a great Idea that you want to take to a global platform? 
       We can help. No project is too big!</ContainerStyles>,
    });
  };

  handleContact = () =>
    this.setState({
      sidebarText: 
        <ContainerStyles>
          <ContactForm toggleMenu={this.toggleMenu} />
        </ContainerStyles>
    });

  toggleMenu = () => {
    this.setState({
      visible: !this.state.visible,
      lockScroll: !this.state.lockScroll
    });
    window.scrollTo(0, 0);
  };

  onClick = () => {
    this.toggleMenu();
    this.props.auth.handleLogout(this.props.history);
  };

  NavItems = () => {
    const {
      auth: { user }
    } = this.props;

    if (user) {
      return (
        <LoginButton name="LogOut" onClick={this.onClick}>
          logOut
        </LoginButton>
      );
    } else {
      return (
        <Link to="/Login">
          <LoginButton onClick={this.toggleMenu} className="btn">
            login
          </LoginButton>
        </Link>
      );
    }
  };

  render() {
    // const { visible } = this.state

    return (
        <Sidebar style={{ display: "flex !important" }}>
          {this.state.visible ? (
            <SideBarStyles
              style={{ display: "flex !important" }}
              className="container"
            >
              <SidebarTitle
                onClick={this.toggleMenu}
                as={Link}
                to={"/"}
                style={{ textDecoration: "none", color: "white", transform: "translate(2.5em, 3.5em)", zIndex: 2 }}
              >
                octopus mountain CO
              </SidebarTitle>
              <Grid row={2} col={1}>
              <Grid.Row centered>
              <ButtonStyle className="btn" onClick={() => this.handleAbout()}>
                About
              </ButtonStyle>
              <ButtonStyle
                className="btn"
                onClick={() => this.handleServices()}
                >
                services
              </ButtonStyle>
              <ButtonStyle onClick={() => this.handleContact()}>
                contAct
              </ButtonStyle>
                </Grid.Row>
                <Grid.Row centered>
                  {this.state.sidebarText}
                </Grid.Row>
              </Grid>
            </SideBarStyles>
          ) : null}
          <MenuButton
            onClick={this.toggleMenu}
            style={{ display: "flex !important" }}
            >
           {
             this.state.visible ?
             <Image
             src={WhiteMenuImg}
             style={{ height: "5em", width: "5em", marginLeft: "3em" }}
             />
             :
             <Image
             src={MenuImg}
             style={{ height: "5em", width: "5em", marginLeft: "3em" }}
             />
           }
          </MenuButton>
          {
            this.state.visible ?
            <Grid relaxed='very' rows={3}>
              <Grid.Row>
                {this.NavItems()}
              </Grid.Row>
              <Grid.Row>
              </Grid.Row>
              <Grid.Row>
                <div as={socialMediaStyles} style={{ marginTop: '35em'}} rows={3}>
                  <Icon 
                    name="facebook f"
                    size="large"
                    />
                  <Icon 
                    name="twitter"
                    size="large"
                    />
                  <Icon 
                    name="github alternate"
                    size="large"
                    />
                  <Icon 
                    name="linkedin square"
                    size="large"
                    />
                </div>
               </Grid.Row>
            </Grid>
            :
            null
          }
          <ScrollLock isActive={this.state.lockScroll} />
        </Sidebar>
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

const HeaderP = styled.div`
  font-family: Arial
  font-size: 10pt
`

const HeaderStyle = styled.div`
font-family: Major Mono Display, monospace; !important
  font-style: bold
  font-size: 8pt
  padding-left: 5%
`

const HeaderTitle = styled.div`
  font-family: Major Mono Display, monospace; !important
  font-size: 40pt
  margin-top: 1em
  margin-bottom: 1em 
`

const ProfileStyle = styled(Image)`
  height: 90%
  width: 90%
  margin-left: 2em
`

const InstagramFrontPic = styled(Image)`
  width: 100%
  height: 5em
`
const InstagramPicture = styled(Image)` 
  display: flex
  justify-content: space-between
  margin-right: 2em
`

const socialMediaStyles = styled.div`
  display: flex !important
  width: 10%
  margin-right: 3em
`

const ContainerStyles = styled(Container)`
  width: 90%
  height: 43em
  margin-top: 3%
  margin-bottom: 6.5% 
  transform: translate(-5%)
`

const Sidebar = styled.div`
  display: flex !important
  background-color: black
  color: white !important
  opacity: .89
  position: absolute !important
  width: 100%
  z-index: 3
`
const SideBarStyles = styled.div`
  display: flex
  width: 100% 
  height: auto
`
const MenuButton = styled.div`
  margin-top: 2em
  position: fixed !important
  z-index: 3
`

const SidebarTitle = styled.h2`
  margin-top: 3.5%
  margin-left: 1em
  font-family: Major Mono Display, monospace; !important
`

const ButtonStyle = styled.div`
  display: flex !important
  height: auto
  margin-top: 5%
  margin-right: 9.5%
  font-family: Major Mono Display, monospace; !important
`
const LoginButton = styled.div`
  display: flex !important
  margin-top: 2em
  margin-right: 1em
  height: 6em
  font-family: Major Mono Display, monospace; !important
`

export default withRouter(ConnectSidebars);
