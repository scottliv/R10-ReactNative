import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

export default class CodeOfConduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value(48)
    };
  }

  _setMaxHeight(event) {
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;

    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  render() {
    let icon = "ios-add";

    if (this.state.expanded) {
      icon = "ios-remove";
    }

    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Icon size={14} name={icon} />
          </TouchableHighlight>
          <Text style={styles.title}>{this.state.title}</Text>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden"
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    flex: 1,
    padding: 15,
    color: "#2a2f43",
    fontWeight: "bold"
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25
  },
  body: {
    padding: 15,
    paddingTop: 0
  }
});
