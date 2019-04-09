import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image, Segment, Icon, Divider } from 'semantic-ui-react'
import { AuthConsumer } from '../providers/AuthProvider'

class Dashboard extends React.Component {
  render() {
    return (
      <Segment>
        <div>
          <Image circular centered size='medium' src={require('../assets/images/AltaMap.png')} />
          <Header as='h1' centered textAlign='center'>
            Welcome {this.props.auth.user.name}!
          </Header>
        </div>
        <Divider hidden />
          <Link to="/Profile">
            <Header textAlign='center' icon>
              <Icon name='address card' />
              Profile
          </Header>
          </Link>
          <Divider hidden />
          <Link to="/Dashboard/Messages">
            <Header textAlign='center' icon>
              <Icon name='chat bar' />
              Messages
          </Header>
          </Link>
          <Divider hidden />
          <Link to="/Dashboard/Analytics">
            <Header textAlign='center' icon>
              <Icon name='chart line' />
              Analytics
          </Header>
          </Link>
          <Divider hidden />
          <Link to="/Dashboard/Payments">
            <Header textAlign='center' icon>
              <Icon name='dollar sign' />
              Payment
          </Header>
          </Link>
      </Segment>
    )
  }
}

const ConnectedDashboard = (props) => (
  <AuthConsumer>
    {auth =>
      <Dashboard {...props} auth={auth} />
    }
  </AuthConsumer>
)

// client
// give a display of all the dashboard users
// set up state where Om can recieve an alert when a message has been stored in our db
// allow us to route our payment to the om bank account
// allows us to leave a message for client and see their response


export default ConnectedDashboard