import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postTypes";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return { ...state, loading: true };
    case FETCH_POST_FAILURE:
      return { ...state, loading: false, error: action.payload, data: [] };
    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, error: "", data: action.payload };
    default:
      return state;
  }
};
export default postReducer;
