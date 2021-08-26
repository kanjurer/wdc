import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class AddDeleteHTMLForm extends Component {
  constructor(props) {
    super(props);
    this.addComponent = this.addComponent.bind(this);
  }
  state = {
    wishlist: [
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
    ],
    wishlistOld: [
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
    ],
  };

  addComponent() {
    const wishlist = this.state.wishlistOld.filter(
      (item) => !this.state.wishlist.includes(item)
    );
  }

  deleteComponent(i) {
    let wishlist = this.state.wishlist;
    wishlist = wishlist.filter((item) => item !== i);
    this.setState({ wishlist });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.wishlist.map((i) => {
          return (
            <Form.Group>
              <Form.Control
                type="text"
                name={this.state.wishlist[this.state.wishlist.indexOf[i]]}
                value={this.state.wishlist[this.state.wishlist.indexOf[i]]}
              />
              <Button type="submit" onClick={() => this.deleteComponent(i)}>
                -
              </Button>
            </Form.Group>
          );
        })}{" "}
        <Button type="submit" onClick={this.addComponent}>
          + Wishlist
        </Button>
      </React.Fragment>
    );
  }
}

export default AddDeleteHTMLForm;
