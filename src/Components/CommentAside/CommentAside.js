import React, { Fragment, Component } from 'react';
import { createdGardenIndex } from '../../api/gardens.js'
import Spinner from 'react-bootstrap/Spinner'
import galleryGarden3 from '../../img/galleryGarden3.jpeg'

class CommentAside extends Component {
  constructor (props) {
  super(props)

  this.state = {
    gardens: null
  }
}
componentDidMount () {
  createdGardenIndex()
    .then(res => this.setState({ gardens: res.data.gardens }))
}

  render() {
  const {gardens} = this.state
  if (!gardens) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  let titleArray = []
  const aside = gardens[0].comments.forEach(comment => {
    for (let prop in comment) {
      if (prop === 'title')
      titleArray.push(comment[prop])
    }
  })
  const asideComments = titleArray.map(title => {
    return (
      <Fragment>
      <div class="blog-posts">
      <div class="item d-flex align-items-center">
      <div class="image"><img src={galleryGarden3} alt="..." class="img-fluid"/></div>
      <div class="title"><strong>{title}</strong></div>
      </div>
      </div>
      </Fragment>
    )
  })
return (
        <div>{asideComments}</div>

)
    }
  }

export default CommentAside
