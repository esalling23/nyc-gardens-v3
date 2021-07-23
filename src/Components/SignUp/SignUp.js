import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { signUp } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class SignUp extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignUp = event => {
    event.preventDefault()

    const { msgAlert, history, setUser } = this.props

    signUp(this.state)
      .then(() => signUp(this.state))
      .then(res => setUser(res.data.user))
      .then(() => msgAlert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/'))
      .catch(error => {
        this.setState({ email: '', password: '', passwordConfirmation: '' })
        msgAlert({
          heading: 'Sign Up Failed with error: ' + error.message,
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password, passwordConfirmation } = this.state

    return (
      <div className="row">
        <div className="col-sm-10 col-md-8 mx-auto mt-5">
      <h3>Sign Up</h3>
        <form onSubmit={this.onSignUp}>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" value={email} name="email" class="form-control" id="InputEmail" placeholder="Enter email" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" value={password} name="password" class="form-control" id="InputPassword1" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" value={passwordConfirmation} name="passwordConfirmation" class="form-control" id="InputPassword2" placeholder="Confirm Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
          <p class="auth">Already a member? Sign in <a href="/sign-in">here</a> </p>
        </div>
      </div>
    )
  }
}

export default withRouter(SignUp)
