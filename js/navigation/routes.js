import AboutContainer from "../scenes/About";
import { createRouter } from "@expo/ex-navigation";
import FavesContainer from "../scenes/Faves";
import NavigationLayout from "./NavigationLayout";
import ScheduleContainer from "../scenes/Schedule";

const Router = createRouter(() => ({
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  faves: () => FavesContainer,
  layout: () => NavigationLayout
}));

export default Router;
