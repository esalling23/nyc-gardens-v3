import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
import { gardenIndex } from '../../api/gardens'
import  allGardens  from '../../img/allGardens.jpeg'

class GardenIndex extends Component {
  constructor (props) {
    super(props)

    // keep track of the gardens in our application
    // keep track of createdGardens so that any joined garden that is not already in the createdGardens array is added for createdGardenIndex
    this.state = {
      gardens: null,
      createdGardens: null

    }
  }
  componentDidMount () {
    gardenIndex()
      .then(res => this.setState({ gardens: res.data }))
  }
  render () {

  const { gardens } = this.state
  // if we haven't fetched any gardens yet from the API
  if (!gardens) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    )
  }
  gardens.forEach(garden => {
    if (garden.borough === "X") {
      garden.borough = "The Bronx"
    } if (garden.borough === "Q") {
      garden.borough = "Queens"
    } if (garden.borough === "B") {
      garden.borough =  "Brooklyn"
    } if (garden.borough === "M") {
      garden.borough = "Manhattan"
    } if (garden.borough === "R") {
      garden.borough = "Staten Island"
    }
  })

  const gardenCards = gardens.map(garden => {
      return (
        <Card key={garden.parksid} id="cardItem" className = "card text-center border-0 post col-xl-6" >
          <Card.Img variant='top' src={allGardens}/>
          <Card.Body>
            <Card.Title>{garden.gardenname}</Card.Title>
            <Card.Text>{garden.borough}</Card.Text>
            <Card.Text>{garden.zipcode}</Card.Text>
            <Link to='/view-1'>
              <Button onClick={() => this.props.setViewGarden(garden)}>View This Garden</Button>
            </Link>
          </Card.Body>
        </Card>
      )
    })
    return (
      <div className="container">
      <div className="row">
        { gardenCards }
      </div>
      </div>
    )
  }
}






export default GardenIndex
