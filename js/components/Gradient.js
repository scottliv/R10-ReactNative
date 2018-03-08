import LinearGradient from "react-native-linear-gradient";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { colors } from "../config/style";

export default class Gradient extends Component {
  render() {
    return (
      <LinearGradient
        colors={[colors.red, colors.purple]}
        style={style.linearGradient}
      >
        {this.props.children}
      </LinearGradient>
    );
  }
}

Gradient.propTypes = {
  children: PropTypes.object
};
var style = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});
