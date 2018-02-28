// Actions

const GET_ABOUT_INFO_LOADING = "GET_ABOUT_INFO_LOADING";
const GET_ABOUT_INFO = "GET_ABOUT_INFO";
const GET_ABOUT_INFO_ERROR = "GET_ABOUT_INFO_ERROR";

// Action Creators

const getAboutInfoLoading = () => ({ type: GET_ABOUT_INFO_LOADING });
const getAboutInfo = aboutInfo => ({
  type: GET_ABOUT_INFO,
  payload: aboutInfo
});
const getAboutInfoError = error => ({
  type: GET_ABOUT_INFO_ERROR,
  payload: error
});

export const fetchAboutInfo = () => dispatch => {
  dispatch(getAboutInfoLoading());
  fetch("https://r10app-95fea.firebaseio.com/code_of_conduct.json")
    .then(res => res.json())
    .then(data => dispatch(getAboutInfo(data)))
    .catch(e => dispatch(getAboutInfoError(e)));
};

// Reducer

export default (
  state = { loading: false, aboutInfo: [], error: "" },
  action
) => {
  switch (action.type) {
    case GET_ABOUT_INFO_LOADING: {
      return { ...state, loading: true };
    }
    case GET_ABOUT_INFO: {
      return { ...state, loading: false, aboutInfo: action.payload };
    }
    case GET_ABOUT_INFO_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
