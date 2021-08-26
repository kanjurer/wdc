import React, { Component } from "react";

class Sections extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4>{this.props.sectionName} </h4>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default Sections;
