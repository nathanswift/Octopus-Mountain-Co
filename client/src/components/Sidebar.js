import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaDiceD20 } from 'react-icons/fa'

class Sidebars extends React.Component {
   state = { visible: false }

  handleAbout = () => {
    console.log('About')
  }

  handleServices = () => {
    console.log('Services')
  }

  handleContact = () => {
    console.log('Contact Info')
  }

  toggleMenu = () => this.setState({ visible: !this.state.visible })

  render() {
    // const { visible } = this.state


    return (
      <Fragment style={{display: 'flex !important'}}>
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
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. 
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </SidebarText>
            </SideBarStyles>
        :
            null
        }
          <MenuButton onClick={this.toggleMenu} style={{ display: 'flex !important'}}>
              <FaDiceD20 style={{ height: '30px', width: '30px', marginLeft: '20px'}}/>
          </MenuButton>
        </Sidebar>
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
