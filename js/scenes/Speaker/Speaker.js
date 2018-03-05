import React from "react";
import { Image, Text, View } from "react-native";
import style from "./style";
const Speaker = ({ speaker }) => (
  <View style={style.speakerTextContainer}>
    <Image
      source={{ uri: speaker.image }}
      style={{ height: 100, width: 100, borderRadius: 50, margin: 20 }}
    />
    <Text style={style.header}> {speaker.name} </Text>
    <Text style={style.text}> {speaker.bio} </Text>
  </View>
);

export default Speaker;
