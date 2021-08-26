import React, { Component } from "react";
import { Card } from "react-bootstrap";
import InlineSearch from "./InlineSearch";
import "./SearchBox.css";
class SearchBox extends Component {
  state = {};
  render() {
    return (
      <Card className="float-right text-center" style={{ width: "35rem" }}>
        <Card.Body>
          <Card.Title>
            <h3>Let's find projects that interest you!</h3>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Nearly 10,000 listed dreams and experiences
          </Card.Subtitle>
          <Card.Text>
            <InlineSearch />
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SearchBox;
