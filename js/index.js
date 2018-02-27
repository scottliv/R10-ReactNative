/**
 * R10 App
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import About from "./scenes/About";

export default class App extends Component {
  render() {
    return (
      <View>
        <About />
      </View>
    );
  }
}
