import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { goToSpeaker } from "../../navigation/navigationHelpers";

const Session = ({ item, speaker }) => {
  console.log(speaker);
  return (
    <View>
      <Text>{item.location}</Text>
      <Text>{item.title}</Text>
      <Text>{item.start_time}</Text>
      <Text>{item.description}</Text>
      <TouchableHighlight
        onPress={() => {
          goToSpeaker("root", { speaker });
        }}
      >
        <Text>{speaker.name}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Session;
