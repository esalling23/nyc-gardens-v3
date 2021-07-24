import React from 'react'

class AutoDismissAlert extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      show: true
    }
    this.timeoutId = null
  }

  componentDidMount () {
    this.timeoutId = setTimeout(this.handleClose, 5000)
  }

  componentWillUnmount () {
    clearTimeout(this.timeoutId)
  }

  handleClose = () => this.setState({ show: false })

  render () {
    const { variant, heading, message, deleteAlert, id } = this.props

    // Delete this alert after the fade animation time (300 ms by default)
    if (!this.state.show) {
      setTimeout(() => {
        deleteAlert(id)
      }, 300)
    }

    return (
      <div class="alert-dismissible" show={this.state.show} variant={variant} onClose={this.handleClose} role="alert">
        <h3 class="h6">{heading} </h3>
        <p class="alert-body">{message}</p>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}

export default AutoDismissAlert
