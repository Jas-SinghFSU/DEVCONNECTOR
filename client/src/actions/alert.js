//this describes what an alert really is. In this case, it holds a message, an alert type and a unique id
import { SET_ALERT, REMOVE_ALERT } from "./types";
import uuid from "uuid";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });

  setTimeout(
    () =>
      //Remove alert after 5 seconds (5000ms)
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      }),
    timeout
  );
};
