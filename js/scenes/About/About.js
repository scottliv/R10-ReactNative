import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { ActivityIndicator, Image, Text, View, ScrollView } from "react-native";
const logo = require("../../assets/images/r10_logo.png");
import style from "./style";

const About = ({ data, loading }) => (
  <ScrollView>
    <View style={style.logo}>
      <Image source={logo} />
    </View>
    <View style={style.container}>
      <Text style={style.header}>
        R10 is a conferenc that focuses on just about any topic related to dev
      </Text>

      <Text>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text>Code of Conduct</Text>
      {!loading ? (
        data.map(item => {
          return (
            <View key={item.title}>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
          );
        })
      ) : (
        <ActivityIndicator />
      )}
    </View>
  </ScrollView>
);

export default About;
