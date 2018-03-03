import React from "react";
import { Platform, View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/style";
import { goToSession } from "../navigation/navigationHelpers";

const ListItem = ({ item, currentUID, style }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.purple}
      activeOpacity={42}
      onPress={() => goToSession(currentUID, { item })}
    >
      <View style={style.container}>
        <Text style={style.header}>{item.title} </Text>
        <View style={style.flexRowContainer}>
          <Text>{item.location} </Text>
          {Platform.OS === "android" &&
            (item.isFave ? (
              <Icon style={{ color: "black" }} size={24} name={"md-heart"} />
            ) : (
              <View />
            ))}
          {Platform.OS === "ios" &&
            (item.isFave ? (
              <Icon style={{ color: "black" }} size={24} name={"ios-heart"} />
            ) : (
              <View />
            ))}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
