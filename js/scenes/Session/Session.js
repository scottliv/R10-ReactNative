import React from "react";
import Moment from "moment";

import Icon from "react-native-vector-icons/Ionicons";
import { createFave, deleteFave } from "../../config/model";
import {
  Button,
  View,
  Text,
  TouchableHighlight,
  Image,
  Platform
} from "react-native";
import { colors } from "../../config/style";
import { goToSpeaker } from "../../navigation/navigationHelpers";
import PropTypes from "prop-types";
import style from "./style";

const Session = ({ item, speaker }) => {
  return (
    <View style={style.container}>
      <View style={style.flexHeader}>
        <Text style={style.subText}>{item.location}</Text>
        {Platform.OS === "android" &&
          (item.isFave ? (
            <Icon style={{ color: colors.red }} size={24} name={"md-heart"} />
          ) : (
            <View />
          ))}
        {Platform.OS === "ios" &&
          (item.isFave ? (
            <Icon style={{ color: colors.red }} size={24} name={"ios-heart"} />
          ) : (
            <View />
          ))}
      </View>
      <Text style={style.header}>{item.title}</Text>
      <Text style={style.time}>
        {Moment.unix(item.start_time).format("LT")}
      </Text>
      <Text style={style.text}>{item.description}</Text>
      <Text style={style.subText}>Presented by:</Text>
      <View style={style.flexRowContainer}>
        <Image
          source={{ uri: speaker.image }}
          style={{ height: 50, width: 50, borderRadius: 25 }}
        />
        <TouchableHighlight
          style={style.name}
          onPress={() => {
            goToSpeaker("root", { speaker });
          }}
        >
          <Text style={style.text}>{speaker.name}</Text>
        </TouchableHighlight>
      </View>
      {!item.isFave ? (
        <Button
          onPress={() => {
            createFave(item.session_id);
            item.isFave = true;
          }}
          title="Add To Faves"
          color="#841584"
          accessibilityLabel="Add to Faves"
        />
      ) : (
        <Button
          onPress={() => {
            deleteFave(item.session_id);
            item.isFave = false;
          }}
          title="Remove from Faves"
          color="#841584"
          accessibilityLabel="Remove from Faves"
        />
      )}
    </View>
  );
};

Session.propTypes = {
  item: PropTypes.object,
  speaker: PropTypes.object
};

export default Session;
