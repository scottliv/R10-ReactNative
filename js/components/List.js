import React from "react";
import { SectionList, View, Text } from "react-native";
import ListItem from "./ListItem";
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
        <Text>{Moment.unix(section.title).format("LT")}</Text>
      )}
      sections={data}
      keyExtractor={item => {
        return item.session_id;
      }}
    />
  );
};

export default List;
