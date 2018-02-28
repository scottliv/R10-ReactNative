import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Faves from "./Faves";

export default class FavesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static route = {
    navigationBar: {
      title: "Faves"
    }
  };

  render() {
    return <Faves />;
  }
}
