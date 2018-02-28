import { combineReducers } from "redux";
import aboutReducer from "./modules/about";
import scheduleReducer from "./modules/schedule";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducer = combineReducers({
  navigation: NavigationReducer,
  about: aboutReducer,
  schedule: scheduleReducer
});

export default rootReducer;
