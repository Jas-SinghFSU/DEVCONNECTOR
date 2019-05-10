import { SET_ALERT, REMOVE_ALERT } from "../actions/types";
const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload]; //add alert to an already existing alert(state) array
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload); //return all alerts except one that matches the payload
    default:
      return state;
  }
}
