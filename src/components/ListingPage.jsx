import React, { Component } from "react";
import { Carousel, Breadcrumb } from "react-bootstrap";

class ListingPage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container col-7">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/logo192.png"
                alt="Third slide"
              />
              <Breadcrumb>
                <Breadcrumb.Item href="#">Feed</Breadcrumb.Item>
                <Breadcrumb.Item href="#">Category</Breadcrumb.Item>
                <Breadcrumb.Item active>Project Title</Breadcrumb.Item>
              </Breadcrumb>

              <Carousel.Caption>
                <h3>Project Title</h3>
                <p>Project Tagline</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br />
        <div class="container col-7">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <br />
        <div>
          <p>Additional Details Here</p>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default ListingPage;
