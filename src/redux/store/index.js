// redux module
import { createStore, applyMiddleware } from "redux";
// devtools
import { composeWithDevTools } from "redux-devtools-extension";
// sagas module
import createSagaMiddleware from "redux-saga";
// saga root
import rootSaga from "../sagas";
// redusers
import rootReducer from "../reducers/";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
