import LinearGradient from "react-native-linear-gradient";
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
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

var style = StyleSheet.create({
  linearGradient: {
    flex: 1
  }
});
