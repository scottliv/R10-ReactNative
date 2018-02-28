/**
 * R10 App
 */
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import Store from "./redux/store";

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StackNavigation initialRoute={Router.getRoute("layout")} />
        </NavigationProvider>
      </Provider>
    );
  }
}
