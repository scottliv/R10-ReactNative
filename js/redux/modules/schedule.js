import endpoints from "../../config/endpoints";
import { formatSessionData } from "../../helpers";
// Actions

const GET_SCHEDULE_LOADING = "GET_SCHEDULE_LOADING";
const GET_SCHEDULE = "GET_SCHEDULE";
const GET_SCHEDULE_ERROR = "GET_SCHEDULE_ERROR";

// Action Creators
const getScheduleLoading = () => ({ type: GET_SCHEDULE_LOADING });
const getSchedule = aboutInfo => ({
  type: GET_SCHEDULE,
  payload: aboutInfo
});
const getScheduleError = error => ({
  type: GET_SCHEDULE_ERROR,
  payload: error
});

export const fetchSchedule = () => dispatch => {
  dispatch(getScheduleLoading());
  fetch(endpoints.sessions)
    .then(res => res.json())
    .then(data => dispatch(getSchedule(data)))
    .catch(e => dispatch(getScheduleError(e)));
};

// Reducer

export default (
  state = { loading: false, schedule: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_SCHEDULE_LOADING: {
      return { ...state, loading: true };
    }
    case GET_SCHEDULE: {
      return { ...state, loading: false, schedule: action.payload };
    }
    case GET_SCHEDULE_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
