import React, { Component } from "react";
import Router from "./routes";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/style";
import {
  TabNavigation,
  TabNavigationItem,
  StackNavigation
} from "@expo/ex-navigation";

export default class NavigationLayout extends Component {
  renderTitle = (isSelected, title) => {
    const fontColor = isSelected ? colors.white : colors.mediumGrey;
    return <Text style={{ color: fontColor }}>{title}</Text>;
  };
  renderIcon = (isSelected, icon) => {
    const iconColor = isSelected ? colors.white : colors.mediumGrey;
    return <Icon style={{ color: iconColor }} size={24} name={icon} />;
  };
  render() {
    return (
      <TabNavigation
        id="main"
        navigatorUID="main"
        initialTab="about"
        tabBarColor={colors.black}
      >
        <TabNavigationItem
          id="about"
          title="About"
          navigatorUID="about"
          renderIcon={isSelected =>
            this.renderIcon(isSelected, "ios-information-circle")
          }
          renderTitle={this.renderTitle}
        >
          <StackNavigation initialRoute={Router.getRoute("about")} />
        </TabNavigationItem>
        <TabNavigationItem
          id="schedule"
          title="Schedule"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-calendar")}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="faves"
          title="Faves"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-heart")}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute("faves")}
            navigatorUID="faves"
          />
        </TabNavigationItem>
        <TabNavigationItem
          id="map"
          title="Map"
          renderIcon={isSelected => this.renderIcon(isSelected, "ios-map")}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="map"
            initialRoute={Router.getRoute("map")}
            navigatorUID="map"
          />
        </TabNavigationItem>
      </TabNavigation>
    );
  }
}
