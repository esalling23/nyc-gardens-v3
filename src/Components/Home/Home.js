import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import community2 from '../../img/community2.jpeg'
import createdGardenIndex from '../../img/createdGardenIndex.jpeg'
import gardenIndex from '../../img/gardenIndex.jpeg'
import galleryGarden1 from '../../img/galleryGarden1.jpeg'
import galleryGarden2 from '../../img/galleryGarden2.jpeg'
import galleryGarden3 from '../../img/galleryGarden3.jpeg'
import galleryGarden4 from '../../img/galleryGarden4.jpeg'


class Home extends Component {
    render() {
        return (
          <div>
          <Header />
          <section style={{ backgroundImage: `url(${community2})`, backgroundSize: 'cover', backgroundPosition: 'center center' }} class="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <h1>Find Your Community Garden</h1>
          </div>
        </div><a href=".intro" class="continue link-scroll"><i class="fa fa-long-arrow-down"></i> Scroll Down</a>
      </div>
    </section>
    <section class="intro" id="scroll-to">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <h2 class="h3">Grow Your Community</h2>
            <p class="text-big">Find gardens in your neighborhood, get connected, and join the conversation!</p>
          </div>
        </div>
      </div>
    </section>
    <section class="featured-posts no-padding-top">
      <div class="container">
        <div class="row d-flex align-items-stretch">
          <div class="text col-lg-7">
            <div class="text-inner d-flex align-items-center">
              <div class="content">
              <header>
                <a href='/gardens'> <h2 class="h4">See What Gardens People Are Talking About</h2></a>
                </header>
                <div><p>Check out these gardens and join the forum to find out about upcoming events, what's new, and what's growing. </p></div>
                <Link to='/gardens'>
                  <button class="btn-primary">View Gardens</button>
                </Link>
              </div>
            </div>
          </div>
          <div class="image col-lg-5"><img src={ createdGardenIndex } alt="Commu"/></div>
        </div>
        <div class="row d-flex align-items-stretch">
          <div class="image col-lg-5"><img src={ gardenIndex } alt="..."/></div>
          <div class="text col-lg-7">
            <div class="text-inner d-flex align-items-center">
              <div class="content">
                <header class="post-header">
                  <a href='/all-gardens'> <h2 class="h4">View All NYC Community Gardens</h2></a>
                </header>
                <p>Find a community garden in your area and start the conversation! </p>
                <Link to='/all-gardens'>
                  <button class="btn-primary">All Gardens</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="gallery no-padding">
      <div class="row">
        <div class="mix col-lg-3 col-md-3 col-sm-6">
          <div class="item"><a href="img/gallery-1.jpg" data-fancybox="gallery" class="image"><img src={ galleryGarden1} alt="..." class="img-fluid"/>
              <div class="overlay d-flex align-items-center justify-content-center"><i class="icon-search"></i></div></a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
          <div class="item"><a href="img/gallery-2.jpg" data-fancybox="gallery" class="image"><img src={ galleryGarden2 } alt="..." class="img-fluid"/>
              <div class="overlay d-flex align-items-center justify-content-center"><i class="icon-search"></i></div></a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
          <div class="item"><a href="img/gallery-3.jpg" data-fancybox="gallery" class="image"><img src={ galleryGarden3 } alt="..." class="img-fluid"/>
              <div class="overlay d-flex align-items-center justify-content-center"><i class="icon-search"></i></div></a></div>
        </div>
        <div class="mix col-lg-3 col-md-3 col-sm-6">
          <div class="item"><a href="img/gallery-4.jpg" data-fancybox="gallery" class="image"><img src={galleryGarden4} alt="..." class="img-fluid"/>
              <div class="overlay d-flex align-items-center justify-content-center"><i class="icon-search"></i></div></a></div>
        </div>
      </div>
    </section>
    <Footer />
    </div>

)
    }
}
export default Home;
