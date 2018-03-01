import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { goBack } from "../../navigation/navigationHelpers";
// import PropTypes from 'prop-types'
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static route = {
    navigationBar: {
      visible: false,
      title: "Spleaker"
    }
  };

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={() => {
            goBack();
          }}
        >
          <Icon style={{ color: "black" }} size={24} name={"md-close"} />
        </TouchableHighlight>
        <Speaker speaker={this.props.route.params.speaker} />
      </View>
    );
  }
}
