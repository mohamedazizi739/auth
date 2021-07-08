import { createStore, applyMiddleware, compose,combineReducers } from "redux";
import userReducer from "../reducer/reducer";

import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(
  combineReducers({userReducer}),

  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
  )
);

export default store;