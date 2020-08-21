import {
  GET_MUSICS,
  SET_LOADING_MUSIC,
  SET_ERROR_MUSIC,
} from "../actions/actionTypes";

const initialState = {
  data: null,
  loading: true,
  error: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_MUSIC:
      return {
        data: null,
        loading: true,
        error: false,
      };
    case SET_ERROR_MUSIC:
      return {
        ...payload,
        loading: false,
        error: true,
      };
    case GET_MUSICS:
      return {
        ...payload,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};
