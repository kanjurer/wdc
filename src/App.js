import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import AddListingForm from "./components/AddListingForm";
import AddDeleteHTMLForm from "./components/AddDeleteHTMLForm";
import AdvancedSearch from "./components/AdvancedSearch";
import Feed from "./components/Feed";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <LogIn />
        <SignUp />
      </>
    );
  }
}

export default App;
