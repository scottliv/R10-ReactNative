import React from "react";
import { SectionList, View, Text } from "react-native";
import ListItem from "./ListItem";
import Moment from "moment";

const List = ({ data, loading, error, onPressFunction, currentUID }) => {
  if (error) {
    return <View />;
  }
  return (
    <SectionList
      renderItem={({ item }) => (
        <ListItem
          item={item}
          onPressFunction={onPressFunction}
          currentUID={currentUID}
        />
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
