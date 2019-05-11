//This file stores all the different types of data in the redux "store" for usage
//combineReduces takes all the different reduces and combines them into one redux object
import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";

export default combineReducers({
  alert,
  auth
});
