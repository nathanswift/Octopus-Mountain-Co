import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ContactForm from "./components/ContactForm";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Works from "./pages/Works";
import WorksShow from "./pages/WorksShow";
import HomeShow from "./components/HomeShow";
import Login from "./components/Login";
import Register from "./components/Register";
import FetchUser from "./components/FetchUser";
import Profile from "./components/Profile";
import DashboardMessages from "./components/DashboardMessages";
import DashboardAnalytics from "./components/DashboardAnalytics";
import DashboardPayments from "./components/DashboardPayments";
import ContactList from "./components/ContactList";
import ProtectedRoute from "./components/ProtectedRoute";

export default class App extends React.Component {

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount() {
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }
  
  render() {
    return (
      <div>
        <FetchUser>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/HomeShow" component={HomeShow} />
            <Route exact path="/Works" component={Works} />
            <Route exact path="/WorksShow" component={WorksShow} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/ContactForm" component={ContactForm} />
            <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
            <ProtectedRoute exact path="/Profile" component={Profile} />
            <ProtectedRoute
              exact
              path="/Dashboard/Messages"
              component={DashboardMessages}
            />
            <ProtectedRoute
              exact
              path="/Dashboard/Analytics"
              component={DashboardAnalytics}
            />
            <ProtectedRoute
              exact
              path="/Dashboard/Payments"
              component={DashboardPayments}
            />
            <ProtectedRoute exact path="/ContactList" component={ContactList} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Register" component={Register} />
            <Route exact path="/Products" component={Products} />
            <Route component={NoMatch} />
          </Switch>
          {/* <Footer /> */}
        </FetchUser>
      </div>
    );
  }
}
