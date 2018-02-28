import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAboutInfo } from "../../redux/modules/about";
// import PropTypes from 'prop-types'
import About from "./About";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "About"
    }
  };

  componentDidMount() {
    this.props.dispatch(fetchAboutInfo());
  }
  render() {
    return <About data={this.props.aboutInfo} loading={this.props.loading} />;
  }
}

const mapStateToProps = state => ({
  loading: state.about.loading,
  aboutInfo: state.about.aboutInfo,
  error: state.about.error
});

export default connect(mapStateToProps)(AboutContainer);
