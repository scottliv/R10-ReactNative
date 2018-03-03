import React from "react";
import { Image, Text, View } from "react-native";
const Speaker = ({ speaker }) => (
  <View>
    <Image
      source={{ uri: speaker.image }}
      style={{ height: 100, width: 100 }}
    />
    <Text> {speaker.name} </Text>
    <Text> {speaker.bio} </Text>
  </View>
);

export default Speaker;
