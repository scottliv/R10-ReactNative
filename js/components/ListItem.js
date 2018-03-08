import React from "react";
import { Platform, View, Text, TouchableHighlight } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { colors } from "../config/style";
import { goToSession } from "../navigation/navigationHelpers";

const ListItem = ({ item, currentUID, style }) => {
  return (
    <TouchableHighlight
      underlayColor={colors.lightGrey}
      activeOpacity={42}
      onPress={() => goToSession(currentUID, { item })}
    >
      <View style={style.container}>
        <Text style={style.text}>{item.title} </Text>
        <View style={style.flexRowContainer}>
          <Text style={(style.text, style.subText)}>{item.location} </Text>
          {Platform.OS === "android" &&
            (item.isFave ? (
              <Icon style={{ color: colors.red }} size={24} name={"md-heart"} />
            ) : (
              <View />
            ))}
          {Platform.OS === "ios" &&
            (item.isFave ? (
              <Icon
                style={{ color: colors.red }}
                size={24}
                name={"ios-heart"}
              />
            ) : (
              <View />
            ))}
        </View>
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  item: PropTypes.object,
  currentUID: PropTypes.object,
  style: PropTypes.object
};

export default ListItem;
