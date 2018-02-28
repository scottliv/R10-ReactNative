import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { colors } from "../config/style";
import { goToSession } from "../navigation/navigationHelpers";

const ListItem = ({ item, currentUID }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.purple}
      activeOpacity={42}
      onPress={() => goToSession("schedule", { item })}
    >
      <View>
        <Text>{item.title} </Text>
        <Text>{item.location} </Text>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
