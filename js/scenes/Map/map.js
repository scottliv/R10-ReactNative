import React, { Component } from "react";
import MapView from "react-native-maps";
import { View, Dimensions } from "react-native";
let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }

  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    return (
      <View>
        <MapView
          region={this.state.region}
          provider="google"
          onRegionChange={this.onRegionChange}
        />
      </View>
    );
  }
}
