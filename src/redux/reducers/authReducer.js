import {
  POST_LOGIN,
  SET_ERROR_LOGIN,
  SET_LOADING_LOGIN,
} from "../actions/actionTypes";

const initialState = {
  data: null,
  loading: true,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_LOGIN:
      return {
        data: null,
        loading: true,
        error: false,
      };
    case SET_ERROR_LOGIN:
      return {
        ...payload,
        loading: false,
        error: true,
      };
    case POST_LOGIN:
      return {
        ...payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
