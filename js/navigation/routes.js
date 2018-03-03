import AboutContainer from "../scenes/About";
import { createRouter } from "@expo/ex-navigation";
import FavesContainer from "../scenes/Faves";
import NavigationLayout from "./NavigationLayout";
import ScheduleContainer from "../scenes/Schedule";
import SessionContainer from "../scenes/Session";
import SpeakerContainer from "../scenes/Speaker";
import MapContainer from "../scenes/Map";

const Router = createRouter(() => ({
  about: () => AboutContainer,
  schedule: () => ScheduleContainer,
  faves: () => FavesContainer,
  session: () => SessionContainer,
  speaker: () => SpeakerContainer,
  map: () => MapContainer,
  layout: () => NavigationLayout
}));

export default Router;
