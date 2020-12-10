import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { mockReducer } from "./mockReducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  mock: mockReducer,
});
