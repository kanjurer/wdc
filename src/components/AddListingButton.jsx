import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class AddListingButton extends Component {
  state = {};
  render() {
    return (
      <Button variant="warning font-weight-bolder mx-auto">
        &#43; Add Listing
      </Button>
    );
  }
}

export default AddListingButton;
