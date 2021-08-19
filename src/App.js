import React, { Component, Fragment } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header.js'
import Home from './Components/Home/Home.js'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import AuthenticatedRoute from './Components/AuthenticatedRoute/AuthenticatedRoute.js'
import SignOut from './Components/SignOut/SignOut.js'
import ChangePassword from './Components/ChangePassword/ChangePassword.js'
import AllGardens from './Components/AllGardens/AllGardens'
import GardenView from './Components/GardenView/GardenView'
import { createdGardenIndex } from './api/gardens'
import AutoDismissAlert from './Components/AutoDismissAlert/AutoDismissAlert'
import { v4 as uuid } from 'uuid'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      viewGarden: null,
      createdGardens: null,
      msgAlerts: []
    }
  }

  componentDidMount () {
    createdGardenIndex()
      .then(res => this.setState({ createdGardens: res.data }))
      .catch(console.error)
  }
setUser = user => this.setState({ user })

clearUser = () => this.setState({ user: null })

deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }
  setViewGarden = (gard) => {
    this.setState({ viewGarden: gard })
  }

  render() {
    const { msgAlerts, user } = this.state
    console.log(user)
    return (
    <Fragment>
    <Header user={user} />
    {msgAlerts.map(msgAlert => (
            <AutoDismissAlert
              key={msgAlert.id}
              heading={msgAlert.heading}
              variant={msgAlert.variant}
              message={msgAlert.message}
              id={msgAlert.id}
              deleteAlert={this.deleteAlert}
            />
          ))}
      <main>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/sign-in' render={() => (
                <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
                )} />
                <Route path='/sign-up' render={() => (
                  <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
                  )} />
                  <Route exact path='/all-gardens' render={() => (
                  <AllGardens createdGardens={this.state.createdGardens} setViewGarden={this.setViewGarden} msgAlert={this.msgAlert} user={user} />
                )} />
                <Route exact path='/view-1' render={() => (
                  <GardenView createdGardens={this.state.createdGardens} viewGarden={this.state.viewGarden} msgAlert={this.msgAlert} user={user} />
                )} />
                <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
            </Switch>
      </main>
      </Fragment>
    );
  }}

export default App;
