import AboutContainer from "../scenes/About";
import { createRouter } from "@expo/ex-navigation";
import FavesContainer from "../scenes/Faves";
import NavigationLayout from "./NavigationLayout";
import ScheduleContainer from "../scenes/Schedule";
import SessionContainer from "../scenes/Session";

const Router = createRouter(() => ({
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  faves: () => FavesContainer,
  session: () => SessionContainer,
  layout: () => NavigationLayout
}));

export default Router;
