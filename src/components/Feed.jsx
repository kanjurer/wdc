import React, { Component } from "react";
import ListingCard from "./ListingCard";

class Feed extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </React.Fragment>
    );
  }
}

export default Feed;
