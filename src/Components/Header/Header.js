import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <header class="header">
          <nav class="navbar fixed-top navbar-expand-lg" >
      <div class="search-area">
        <div class="search-area-inner d-flex align-items-center justify-content-center">
          <div class="close-btn"><i class="icon-close"></i></div>
          <div class="row d-flex justify-content-center">
            <div class="col-md-8">
              <form action="#">
                <div class="form-group">
                  <input type="search" name="search" id="search" placeholder="Enter your zip code to find gardens near you"/>
                  <button type="submit" class="submit"><i class="icon-search-1"></i></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="navbar-header d-flex align-items-center justify-content-between">
          <a href="index.html" class="navbar-brand">NYC <span class="navbar-brand-logo">Gardens</span></a>
          <button type="button" data-toggle="collapse" data-target="#navbarcollapse" aria-controls="navbarcollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span></span><span></span><span></span></button>
        </div>
        <div id="navbarcollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item"><a href="/" class="nav-link ">Home</a>
            </li>
            <li class="nav-item"><a href="/sign-in" class="nav-link ">Sign In</a>
            </li>
            <li class="nav-item"><a href="/created" class="nav-link ">Forums</a>
            </li>
            <li class="nav-item"><a href="/all-gardens" class="nav-link ">Gardens</a>
            </li>
          </ul>
          <div class="navbar-text"><a href="#sign-in" class="search-btn"><i class="icon-search-1"></i></a></div>
        </div>
      </div>
    </nav>
  </header>

)
    }
}
export default Header;
