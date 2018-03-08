import React from "react";
import { SectionList, View, Text } from "react-native";
import ListItem from "./ListItem";
import PropTypes from "prop-types";
import Moment from "moment";

const List = ({ data, loading, error, currentUID, style }) => {
  if (error) {
    return <View />;
  }
  return (
    <SectionList
      renderItem={({ item }) => (
        <ListItem item={item} currentUID={currentUID} style={style} />
      )}
      renderSectionHeader={({ section }) => (
        <Text style={style.header}>
          {Moment.unix(section.title).format("LT")}
        </Text>
      )}
      sections={data}
      keyExtractor={item => {
        return item.session_id;
      }}
    />
  );
};

List.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  style: PropTypes.object,
  currentUID: PropTypes.string
};

export default List;
