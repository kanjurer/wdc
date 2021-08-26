import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.classicDataHandler = this.classicDataHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    email: "",
    password: "",
  };

  classicDataHandler(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const details = {
      EmailAddress: this.state.email,
      Password: this.state.password,
    };
    axios
      .post("http://localhost:5000/signUp", details)
      .then((res) => console.log(res.data, details));
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.classicDataHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.classicDataHandler}
          />
        </Form.Group>
        <Form.Group>
          <Form.Check type="checkbox" label="I agree to terms and conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default SignUp;
