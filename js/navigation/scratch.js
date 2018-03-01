import React, { Component } from "react";
import Router from "./routes";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { colors } from "../config/style";
import {
  DrawerNavigation,
  DrawerNavigationItem,
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
      <DrawerNavigation
        id="main"
        // navigatorUID="main"
        initialDrawer="about"
        drawerWidth={300}
      >
        <DrawerNavigationItem
          id="about"
          title="About"
          // navigatorUID="about"
          // renderIcon={isSelected =>
          //   this.renderIcon(isSelected, "md-information-circle")
          // }
          // renderTitle={this.renderTitle}
        >
          <StackNavigation id="about" initialRoute={Router.getRoute("about")} />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="schedule"
          title="Schedule"
          // renderIcon={isSelected => this.renderIcon(isSelected, "md-calendar")}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="schedule"
            navigatorUID="schedule"
            initialRoute={Router.getRoute("schedule")}
          />
        </DrawerNavigationItem>
        <DrawerNavigationItem
          id="faves"
          title="Faves"
          // renderIcon={isSelected => this.renderIcon(isSelected, "md-heart")}
          renderTitle={this.renderTitle}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute("faves")}
            navigatorUID="faves"
          />
        </DrawerNavigationItem>
      </DrawerNavigation>
    );
  }
}
