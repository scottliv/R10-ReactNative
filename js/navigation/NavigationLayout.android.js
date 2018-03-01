import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/style";
import Router from "./routes";
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem
} from "@expo/ex-navigation";

// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

export default class DrawerNavigationLayout extends Component {
  static route = {
    navigationBar: {
      visible: false
    }
  };

  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="about"
        drawerWidth={300}
        renderHeader={this._renderHeader}
      >
        <DrawerNavigationItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
          renderTitle={isSelected => this._renderTitle("Faves", isSelected)}
        >
          <StackNavigation id="home" initialRoute={Router.getRoute("faves")} />
        </DrawerNavigationItem>

        <DrawerNavigationItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "md-information-circle")
          }
          renderTitle={isSelected => this._renderTitle("About", isSelected)}
        >
          <StackNavigation id="about" initialRoute={Router.getRoute("about")} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
          renderTitle={isSelected => this._renderTitle("Schedule", isSelected)}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }

  _renderHeader = () => {
    return <View style={styles.header} />;
  };

  renderIcon = (isSelected, icon) => {
    const iconColor = isSelected ? colors.white : colors.mediumGrey;
    return <Icon style={{ color: iconColor }} size={24} name={icon} />;
  };

  _renderTitle(text, isSelected) {
    return (
      <Text
        style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}
      >
        {text}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: "blue"
  },

  titleText: {
    fontWeight: "bold"
  },

  selectedTitleText: {
    color: "white"
  }
});
