import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Services from './pages/Services'
import Works from './pages/Works'

export default class App extends React.Component {

  render() {
    return(
      <div>
        <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/products" component={Products} />
          </Switch>
      </div>
    )
  }
}