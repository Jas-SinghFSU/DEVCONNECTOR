import axios from "axios";

//with this function, if we have a token we can just send it with every request
const setAuthToken = token => {
  if (token) {
    //if there is a token in local storage, the pass it into the header as x-auth-token
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    //otherwise delete the token from the header
    delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
