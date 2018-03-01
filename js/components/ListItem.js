import React from "react";
import { Platform, View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
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
        {Platform.OS === "android" && (
          <Icon style={{ color: "black" }} size={24} name={"md-heart"} />
        )}
        {Platform.OS === "ios" && (
          <Icon style={{ color: "black" }} size={24} name={"ios-heart"} />
        )}
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
