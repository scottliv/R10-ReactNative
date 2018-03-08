import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAboutInfo } from "../../redux/modules/about";
import Gradient from "../../components/Gradient";
import { titleBarStyle } from "../../config/style";

// import PropTypes from 'prop-types'
import About from "./About";

class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  static route = {
    navigationBar: {
      title: "About",
      titleStyle: titleBarStyle,
      renderBackground: () => <Gradient />
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

AboutContainer.propTypes = {
  dispatch: PropTypes.func,
  loading: PropTypes.bool,
  aboutInfo: PropTypes.array
};

export default connect(mapStateToProps)(AboutContainer);
