import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
          <footer class="main-footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-bg-1">
            <div class="logo">
              <h6 class="text-white">NYC Gardens</h6>
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

        </div>
      </div>
      <div class="copyrights">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <p>&copy; Kris Barrett 2021</p>
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
