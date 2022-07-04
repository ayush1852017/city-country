import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./City-Country/reducer";

const rootReducer = combineReducers({
  reducerStore: reducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
