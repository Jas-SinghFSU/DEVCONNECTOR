//This file stores all the different types of data in the redux "store" for usage
//combineReduces takes all the different reduces and combines them into one object
import { combineReducers } from "redux";
import alert from "./alert";

export default combineReducers({
  alert
});
