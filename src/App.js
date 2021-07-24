import React, { Component, Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home.js'
import SignIn from './Components/SignIn/SignIn'
import SignUp from './Components/SignUp/SignUp'
import GardenIndex from './Components/GardenIndex/GardenIndex'
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

    return (
    <Fragment>
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
        <Router>
          <Switch>
              <Route exact path='/' component={ Home } />
              <Route path='/sign-in' render={() => (
                <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
                )} />
                <Route path='/sign-up' render={() => (
                  <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
                  )} />
                  <Route exact path='/all-gardens' render={() => (
                  <GardenIndex setViewGarden={this.setViewGarden} msgAlert={this.msgAlert} user={user} />
                )} />
            </Switch>
      </Router>
      </main>
      </Fragment>
    );
  }}

export default App;
