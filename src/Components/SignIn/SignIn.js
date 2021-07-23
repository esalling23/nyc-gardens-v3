import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class SignIn extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
  [event.target.name]: event.target.value
})

onSignIn = event => {
  event.preventDefault()

  const { msgAlert, history, setUser } = this.props
  
  signIn(this.state)
    .then(res => setUser(res.data.user))
    .then(() => msgAlert({
      heading: 'Sign In Success',
      message: messages.signInSuccess,
      variant: 'success'
    }))
    .then(() => history.push('/'))
    .catch(error => {
      this.setState({ email: '', password: '' })
      msgAlert({
        heading: 'Sign In Failed with error: ' + error.message,
        message: messages.signInFailure,
        variant: 'danger'
      })
    })
}


    render() {
      const { email, password } = this.state

      return (
        <div className="row">
          <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign In</h3>
          <form onSubmit={this.onSignIn}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" value={email} name="email" class="form-control" id="exampleInputPassword1" placeholder="Enter email" onChange={this.handleChange}/>
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" value={password} name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <button type="submit" class="btn btn-primary">Sign In</button>
          </form>
            <p class="auth">Not a member? Sign up <a href="/sign-up">here</a> </p>
          </div>
        </div>
      );
    }
  }



export default withRouter(SignIn)
