import React from 'react'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './pages/NoMatch'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Services from './pages/Services'
import Works from './pages/Works'
import HomeShow from './components/HomeShow'
import Login from './components/Login'
import Register from './components/Register'

export default class App extends React.Component {

  render() {

    return(
      <div>
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/HomeShow' component={HomeShow} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Dashboard" component={Dashboard} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Products" component={Products} />
            <Route component={NoMatch} />
          </Switch>
        <Footer />
      </div>
    )
  }
}