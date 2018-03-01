import React from "react";
import Moment from "moment";
import realm from "../../config/model";
import { createFave, deleteFave } from "../../config/model";
import { Button, View, Text, TouchableHighlight } from "react-native";
import { goToSpeaker } from "../../navigation/navigationHelpers";

const Session = ({ item, speaker }) => {
  console.log(realm);
  return (
    <View>
      <Text>{item.location}</Text>
      <Text>{item.title}</Text>
      <Text>{Moment.unix(item.start_time).format("LT")}</Text>
      <Text>{item.description}</Text>
      <TouchableHighlight
        onPress={() => {
          goToSpeaker("root", { speaker });
        }}
      >
        <Text>{speaker.name}</Text>
      </TouchableHighlight>
      <Button
        onPress={() => {
          createFave(item.session_id);
        }}
        title="Add To Faves"
        color="#841584"
        accessibilityLabel="Add to Faves"
      />
      <Button
        onPress={() => {
          deleteFave(item.session_id);
        }}
        title="Remove from Faves"
        color="#841584"
        accessibilityLabel="Remove from Faves"
      />
    </View>
  );
};

export default Session;
