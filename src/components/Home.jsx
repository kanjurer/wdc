import React, { Component } from "react";
import { Jumbotron, Container, CardDeck, Card } from "react-bootstrap";

import SearchBox from "./SearchBox";
import ListingCard from "./ListingCard";
import PricingPlans from "./PricingPlans";

import "./Home.css";

class Homepage extends Component {
  state = {
    cardTitle: ["Create", "Connect", "Collaborate"],
    cardText: [
      " Create a project, let the right people find and support you.",
      "Connect with the talents around the world.",
      "Collaborate with the people, work on your projects, create a masterpiece.",
    ],
    number: [0, 1, 2],
  };
  render() {
    return (
      <>
        <Jumbotron fluid className="JumbotronArea">
          <Container>
            <h1 className="text-white font-weight-bold display-4 title">
              Explore The Dream Directory
            </h1>
            <h3 className="text-white">
              Just looking around? Let us show you some hot & happening
              projects!
            </h3>
            <SearchBox />
          </Container>
        </Jumbotron>

        <div className="container">
          <h1 className="text-center">Build Your Dreams!</h1>
          <h4 className="text-center text-muted">
            Projects to Explore, Connect & Collaborate With
          </h4>
          <br />
          <CardDeck className="row row-cols-1 row-cols-md-4">
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
            <ListingCard />
          </CardDeck>
        </div>

        <div className="container">
          <h1 className="text-center">
            Get started today to achieve your dreams!
          </h1>
          <h4 className="text-center text-muted">
            Nearly 80% Of Individuals Doing Projects Are Looking For The Right
            People To Work With
          </h4>
          <br />
          <CardDeck className="row row-cols-1 row-cols-md-4 mx-auto ">
            {" "}
            {this.state.number.map((i) => (
              <Card>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>{this.state.cardTitle[i]}</Card.Title>
                  <Card.Text>{this.state.cardText[i]}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardDeck>
        </div>
        <div className="container">
          <PricingPlans />
        </div>
      </>
    );
  }
}

export default Homepage;
