import React, { Component } from "react";
import { connect } from "react-redux";

// import PropTypes from 'prop-types'
import Session from "./Session";

class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "Session"
    }
  };

  render() {
    console.log(this.props.route);
    return <Session item={this.props.route.params.item} />;
  }
}

export default SessionContainer;
