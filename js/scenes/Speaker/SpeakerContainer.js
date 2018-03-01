import React, { Component } from "react";
// import PropTypes from 'prop-types'
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static route = {
    navigationBar: {
      title: "Speaker"
    }
  };

  render() {
    return <Speaker speaker={this.props.route.params.speaker} />;
  }
}
