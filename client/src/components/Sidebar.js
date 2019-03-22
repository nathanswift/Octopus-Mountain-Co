import React from 'react'
import { Button, Sidebar, Icon, Menu, Segment, Header, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Sidebars extends React.Component {
    state = { visible: false }

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    let bodyStyle = {
      backgroundColor: '#1c1c1c',
    }

    let btnStyle = {
      marginLeft: '125px',
      marginTop: '50px',
      color: 'white',
      fontSize: '1.5em',
      backgroundColor: '#1c1c1c',
      opacity: '.7'
    }


    return (
      <div style={bodyStyle}>
          <div>
          <Button style={btnStyle} disabled={visible} onClick={this.handleShowClick}>
            <Icon name="align center" size="big" rotated="counter clockwise"></Icon>
          </Button>
          </div>

          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Link to="/"><Icon name='home' /><br/>Home</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="Contact"><Icon name='id badge outline' /><br/>Contact</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="About"><Icon name='id badge outline' /><br/>About</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="Services"><Icon name='id badge outline' /><br/>Services</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="Works"><Icon name='address card outline' /> <br/>Works</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="Dashboard"><Icon name='address card outline' /> <br/>Customer Portal</Link>
            </Menu.Item>
            <Menu.Item as='a'>
              <Link to="Products"><Icon name='address card outline' /> <br/>Store</Link>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
          </Sidebar.Pusher>
      </div>
    )
  }
}

export default Sidebars
