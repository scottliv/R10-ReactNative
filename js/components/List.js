import React from "react";
import { SectionList, View, Text, ListItem } from "react-native";
import Moment from "moment";

const list = ({ data, loading, error }) => {
  console.log(data);
  if (error) {
    return <View />;
  }
  return (
    <SectionList
      renderItem={({ item }) => (
        <View>
          <Text>{item.title} </Text>
          <Text>{item.location} </Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <Text>{Moment.unix(section.title).format("LT")}</Text>
      )}
      sections={data}
      keyExtractor={item => {
        console.log(item);
        return item.session_id;
      }}
    />
  );
};

export default list;
