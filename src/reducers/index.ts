import { combineReducers } from "redux";
import { reducer as posts } from "./posts.reducers";
export default combineReducers({
  posts,
});
