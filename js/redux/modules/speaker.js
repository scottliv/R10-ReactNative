import endpoints from "../../config/endpoints";
import { formatSessionData } from "../../helpers";

// Actions
const GET_SPEAKER_LOADING = "GET_SPEAKER_LOADING";
const GET_SPEAKER = "GET_SPEAKER";
const GET_SPEAKER_ERROR = "GET_SPEAKER_ERROR";

// Action Creators
const getSpeakerLoading = () => ({ type: GET_SPEAKER_LOADING });
const getSpeaker = aboutInfo => ({
  type: GET_SPEAKER,
  payload: aboutInfo
});
const getSpeakerError = error => ({
  type: GET_SPEAKER_ERROR,
  payload: error
});

export const fetchSpeaker = () => dispatch => {
  dispatch(getSpeakerLoading());
  fetch(endpoints.speakers)
    .then(res => res.json())
    .then(data => dispatch(getSpeaker(data)))
    .catch(e => dispatch(getSpeakerError(e)));
};

// Reducer
export default (
  state = { loading: false, speakers: {}, error: "" },
  action
) => {
  switch (action.type) {
    case GET_SPEAKER_LOADING: {
      return { ...state, loading: true };
    }
    case GET_SPEAKER: {
      return { ...state, loading: false, speakers: action.payload };
    }
    case GET_SPEAKER_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
