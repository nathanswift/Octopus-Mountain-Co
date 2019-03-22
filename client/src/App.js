import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Services from './pages/Services'
import Works from './pages/Works'

export default class App extends React.Component {

  render() {
    let bodyStyle = {
      backgroundColor: '#1c1c1c',
      width: '100%',
      minHeight: '1200px',
      maxHeight: '100%',
      margin: 'auto'
    }

    return(
      <div style={bodyStyle}>
        <Sidebar />
        <Container >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
          </Switch>
        </Container>
      </div>
    )
  }
}