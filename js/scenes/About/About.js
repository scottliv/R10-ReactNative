import React, { Component } from "react";
// import PropTypes from 'prop-types'
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  Animated,
  ScrollView
} from "react-native";
import CodeOfConduct from "./CodeOfConduct";
const logo = require("../../assets/images/r10_logo.png");
import style from "./style";

const About = ({ data, loading }) => (
  <ScrollView>
    <View style={style.logo}>
      <Image source={logo} />
    </View>
    <View style={style.container}>
      <Text style={style.text}>
        R10 is a conferenc that focuses on just about any topic related to dev
      </Text>

      <Text style={style.header}>Date & Venue</Text>
      <Text>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver, BC.
      </Text>
      <Text style={style.header}>Code of Conduct</Text>
      {!loading ? (
        data.map(item => {
          return (
            <View key={item.title}>
              <CodeOfConduct title={item.title}>
                <Text style={style.text}>{item.description}</Text>
              </CodeOfConduct>
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
