import { combineReducers } from "redux";

import modulesReducer from "./modules/reducer";
/**
 * Root reducer
 * @type {Reducer<any> | Reducer<any, AnyAction>}
 */
const rootReducers = combineReducers({
  module: modulesReducer,
});

export default rootReducers;
