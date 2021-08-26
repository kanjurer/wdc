import React, { Component } from "react";
import { Form, Button, Badge } from "react-bootstrap";

class MultiSelectDeleteField extends Component {
  constructor(props) {
    super(props);
    const array1 = this.props.array1;
    const array2 = this.props.array2;
    this.state = {
      array1: array1,
      array2: array2,
    };
  }
  addBadge(option) {
    let array1 = this.state.array1;
    let array2 = this.state.array2;
    array2 = [...array2, option];
    array1 = array1.filter((item) => item !== option);

    this.setState(
      {
        array2: array2,
        array1: array1,
      },
      () => {
        let array2 = this.state.array2;
        this.props.getData(array2);
      }
    );
  }

  deleteBadge(option) {
    let array1 = this.state.array1;
    let array2 = this.state.array2;
    array1 = [...array1, option];
    array2 = array2.filter((item) => item !== option);

    this.setState(
      {
        array2: array2,
        array1: array1,
      },
      () => {
        let array2 = this.state.array2;
        this.props.getData(array2);
      }
    );
  }

  render() {
    return (
      <Form.Group>
        <Form.Group>
          <Form.Label>
            <b>{this.props.fieldName}</b>
          </Form.Label>
          <Form.Control size="sm" as="select" multiple>
            {this.state.array1.map((i) => (
              <option onClick={() => this.addBadge(i)}>{i}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Form.Group>
          {this.state.array2.map((i) => {
            return (
              <Button variant="primary" onClick={() => this.deleteBadge(i)}>
                {i} <Badge variant="primary">&#10005;</Badge>{" "}
              </Button>
            );
          })}
        </Form.Group>
      </Form.Group>
    );
  }
}

export default MultiSelectDeleteField;

/*


Usage:-
In ParentComponent,

getData(childData){
   this.setState({ getData: childData }); //will make a getData array in state!
}


<MultiSelectDeleteField 
array1 = {array1} //filled array
array2 = {array2} //blank array
getData ={this.getData}


/>


*/
