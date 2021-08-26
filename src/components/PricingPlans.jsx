import React, { Component } from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

class PricingPlans extends Component {
  state = {
    cardTitle: ["Free", "Basic", "Silver", "Gold"],
    number: [0, 1, 2, 3],
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="text-center">Choose The Plan That Works For You</h1>
        <h4 className="text-center text-muted">And Connect With Your Dreams</h4>
        <br />
        <CardDeck className="row row-cols-1 row-cols-md-3 mx-auto">
          {this.state.number.map((i) => (
            <Card className="text-center" style={{ width: "15rem" }}>
              <Card.Body>
                <Card.Title>{this.state.cardTitle[i]}</Card.Title>
                <Card.Text>
                  The description of the plan goes here The description of the
                  plan goes here
                </Card.Text>
                <Button variant="primary">Select Plan</Button>
              </Card.Body>
            </Card>
          ))}
        </CardDeck>
      </React.Fragment>
    );
  }
}

export default PricingPlans;
