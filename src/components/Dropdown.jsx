import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class Dropdown extends Component {
  state = {};
  render() {
    return (
      <Form.Group>
        <Form.Control size="sm" as="select">
          {this.props.dropdown.map((type) => (
            <option>{type}</option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}

export default Dropdown;
