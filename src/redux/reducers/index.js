import { combineReducers } from "redux";

import music from "./musicReducer";
import auth from "./authReducer";

export default combineReducers({
  music,
  auth,
});
