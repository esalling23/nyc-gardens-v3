import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
          <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="logo">
              <h6 class="text-white">Bootstrap Blog</h6>
            </div>
            <div class="contact-details">
              <p>53 Broadway, Broklyn, NY 11249</p>
              <p>Phone: (020) 123 456 789</p>
              <p>Email: <a href="mailto:info@company.com">Info@Company.com</a></p>
              <ul class="social-menu">
                <li class="list-inline-item"><a href="#facebook"><i class="fa fa-facebook"></i></a></li>
                <li class="list-inline-item"><a href="#twitter"><i class="fa fa-twitter"></i></a></li>
                <li class="list-inline-item"><a href="#instagram"><i class="fa fa-instagram"></i></a></li>
                <li class="list-inline-item"><a href="#behance"><i class="fa fa-behance"></i></a></li>
                <li class="list-inline-item"><a href="#pintrest"><i class="fa fa-pinterest"></i></a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="menus d-flex">
              <ul class="list-unstyled">
                <li> <a href="#myaccount">My Account</a></li>
                <li> <a href="#addlisting">Add Listing</a></li>
                <li> <a href="#pricing">Pricing</a></li>
                <li> <a href="#Privacy">Privacy &amp; Policy</a></li>
              </ul>
              <ul class="list-unstyled">
                <li> <a href="#ourpartners">Our Partners</a></li>
                <li> <a href="#faq">FAQ</a></li>
                <li> <a href="#how it works">How It Works</a></li>
                <li> <a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="latest-posts"><a href="#latest">
                <div class="post d-flex align-items-center">
                  <div class="image"><img src="img/small-thumbnail-1.jpg" alt="..." class="img-fluid"/></div>
                  <div class="title"><strong>Hotels for all budgets</strong><span class="date last-meta">October 26, 2016</span></div>
                </div></a><a href="#hotels">
                <div class="post d-flex align-items-center">
                  <div class="image"><img src="img/small-thumbnail-2.jpg" alt="..." class="img-fluid"/></div>
                  <div class="title"><strong>Great street atrs in London</strong><span class="date last-meta">October 26, 2016</span></div>
                </div></a><a href="#london">
                <div class="post d-flex align-items-center">
                  <div class="image"><img src="img/small-thumbnail-3.jpg" alt="..." class="img-fluid"/></div>
                  <div class="title"><strong>Best coffee shops in Sydney</strong><span class="date last-meta">October 26, 2016</span></div>
                </div></a></div>
          </div>
        </div>
      </div>
      <div class="copyrights">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; 2017. All rights reserved. Your great site.</p>
            </div>
            <div class="col-md-6 text-right">
              <p>Template By <a href="https://bootstrapious.com/p/bootstrap-carousel" class="text-white">Bootstrapious</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>

)
    }
}
export default Footer;
