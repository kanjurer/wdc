import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Reviews.css";

class Reviews extends Component {
  state = {
    label: ["First Review", "Second Review", "Third Review"],
    review: Array(3).fill(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    ),
    number: [0, 1, 2],
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">People are talking about us!</h1>
        <h4 className="text-center text-muted">
          North America's first dream directory
        </h4>
        <br />
        <div className="container-sm mx-auto">
          <Carousel>
            {this.state.number.map((i) => (
              <Carousel.Item>
                <img
                  className="d-block w-100 image"
                  src="/logo192.jpg"
                  alt="reviews"
                />
                <Carousel.Caption>
                  <h3>{this.state.label[i]}</h3>
                  <p>{this.state.review[i]}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </React.Fragment>
    );
  }
}

export default Reviews;
