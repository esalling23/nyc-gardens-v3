import React, { Component } from 'react';
import GardenIndex from '../GardenIndex/GardenIndex.js'
import CommentAside from '../CommentAside/CommentAside'

class AllGardens extends Component {

   render() {
     // const createdGardens = this.props.createdGardens
     // console.log(createdGardens.gardens[0].comments.map(comment => {
     //   return (comment.title)
     // }))
    return (

      <div>
      <div class="container">
      <div class="row">
        <main class="posts-listing col-lg-8">
        <GardenIndex setViewGarden={this.props.setViewGarden}/>
        </main>
        <aside class="col-lg-4">
          <div class="widget search">
            <header>
              <h3 class="h6">Search gardens near you</h3>
            </header>
            <form action="#" class="search-form">
              <div class="form-group">
                <input type="search" placeholder="Enter your zip code"/>
                <button type="submit" class="submit"><i class="icon-search"></i></button>
              </div>
            </form>
          </div>
          <div class="widget latest-posts">
          <header>
            <h3 class="h6">Recent Messages</h3>
          </header>
          <CommentAside/>
        </div>
          <div class="widget categories">
            <header>
              <h3 class="h6">Categories</h3>
            </header>
            <div class="item d-flex justify-content-between"><a href="#">Growth</a><span>12</span></div>
            <div class="item d-flex justify-content-between"><a href="#">Local</a><span>25</span></div>
            <div class="item d-flex justify-content-between"><a href="#">Events</a><span>8</span></div>
            <div class="item d-flex justify-content-between"><a href="#">Tips</a><span>17</span></div>
            <div class="item d-flex justify-content-between"><a href="#">Harvest</a><span>25</span></div>
          </div>
          <div class="widget tags">
            <header>
              <h3 class="h6">Tags</h3>
            </header>
            <ul class="list-inline">
              <li class="list-inline-item"><a href="#" class="tag">#Organic</a></li>
              <li class="list-inline-item"><a href="#" class="tag">#Blooming</a></li>
              <li class="list-inline-item"><a href="#" class="tag">#Harvest</a></li>
              <li class="list-inline-item"><a href="#" class="tag">#Community</a></li>
              <li class="list-inline-item"><a href="#" class="tag">#Gardens</a></li>
            </ul>
          </div>
        </aside>
        </div>
        </div>
        </div>
    )
  }
}

export default AllGardens
