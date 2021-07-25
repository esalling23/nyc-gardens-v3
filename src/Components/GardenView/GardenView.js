import React, { Component } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import GardenCreate from '../GardenCreate/GardenCreate'
import allGardens from '../../img/allGardens.jpeg'

class GardenView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      garden: {
        parksId: props.parksId,
        name: props.name,
        borough: props.borough,
        zipCode: props.zipCode,
        members: [],
        comments: []
      }
    }
  }
  render () {
    const { viewGarden, user, createdGardens, msgAlert } = this.props
    if (!viewGarden) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }
    return (
      <div class="container">
          <div class="post-single">
            <div class="post-thumbnail"><img src={allGardens} alt="Flowers blooming" class="img-fluid"/></div>
            <div class="post-details">
              <div class="post-meta d-flex justify-content-between">
              </div>
              <h1>{viewGarden.gardenname}</h1>
              <div class="post-footer d-flex align-items-center justify-content-space-around flex-column flex-sm-row">
                  <div class="title"><span>{viewGarden.borough} | </span></div>
                <div class="d-flex align-items-center flex-wrap">
                  <div class="date">| {viewGarden.zipcode}</div>
                </div>
              </div>
              <div class="post-body">
                <p class="lead"> This garden doesn't have any comments yet! Join {viewGarden.gardenname} to become a member and start the conversation.</p>
                <p> <img src="img/featured-pic-3.jpeg" alt="..." class="img-fluid"/></p>
              </div>
              <GardenCreate
                user={user}
                viewGarden={viewGarden}
                createdGardens={createdGardens}
                msgAlert={msgAlert}
                parksId={viewGarden.parksid}
                name={viewGarden.gardenname}
                borough={viewGarden.borough}
                zipCode={viewGarden.zipcode} />
            </div>
          </div>
        </div>

    )
  }
}

export default (GardenView)
