import React, { Component } from "react";
// import PropTypes from 'prop-types'
import About from "./About";

export default class AboutContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getAboutData = () => {
    fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
      .then(res => res.json())
      .then(data => this.setState({ data }))
      .catch(e => console.log(e));
  };

  componentDidMount() {
    this.getAboutData();
  }
  render() {
    return <About data={this.state.data} />;
  }
}
