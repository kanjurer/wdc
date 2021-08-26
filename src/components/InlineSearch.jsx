import React, { Component } from "react";
import { Form, Button, FormControl } from "react-bootstrap";

class InlineSearch extends Component {
  state = {};
  render() {
    return (
      <Form inline>
        <FormControl type="text" placeholder="Search" className="col-md-8 " />
        <Button variant="info">
          <span>&#x1F50D;</span>
        </Button>
      </Form>
    );
  }
}

export default InlineSearch;
