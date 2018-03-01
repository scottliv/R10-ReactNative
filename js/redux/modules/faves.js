import { queryFaves } from "../../config/model";

// Actions
const GET_FAVES_LOADING = "GET_FAVES_LOADING";
const GET_FAVES = "GET_FAVES";
const GET_FAVES_ERROR = "GET_FAVES_ERROR";

// Action Creators
const getFavesLoading = () => ({ type: GET_FAVES_LOADING });
const getFaves = faves => ({
  type: GET_FAVES,
  payload: faves
});
const getFavesError = error => ({
  type: GET_FAVES_ERROR,
  payload: error
});

export const fetchFaves = () => dispatch => {
  dispatch(getFavesLoading());
  const faves = queryFaves();
  console.log(faves);
  dispatch(getFaves(faves));
};

// Reducer
export default (state = { loading: false, faves: {}, error: "" }, action) => {
  switch (action.type) {
    case GET_FAVES_LOADING: {
      return { ...state, loading: true };
    }
    case GET_FAVES: {
      return { ...state, loading: false, faves: action.payload };
    }
    case GET_FAVES_ERROR: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};
