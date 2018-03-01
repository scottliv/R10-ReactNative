import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "./routes";

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", sessionData)
    )
  );
};
export const goToSpeaker = (currentNavigatorUID, speakerData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("speaker", speakerData)
    )
  );
};
