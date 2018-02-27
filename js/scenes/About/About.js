import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Text, View, ScrollView } from "react-native";
import style from "./style";

const About = ({ data }) => (
  <ScrollView>
    {data.map(item => {
      return (
        <View key={item.title}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </View>
      );
    })}
    <Text>MuthaFuckas be actin like they forgot 'ABOUT' Dre</Text>
  </ScrollView>
);

export default About;
