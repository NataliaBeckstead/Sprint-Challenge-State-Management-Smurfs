import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333")
    .then(res => {
      console.log(res);
      dispatch({ type: UPDATE_SMURF, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};
export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const postData = data => dispatch => {
    dispatch({ type: POST_START });
    axios
      .post("http://localhost:3333", data)
      .then(res => {
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("error", err.response);
        dispatch({ type: POST_FAILURE, payload: err.response.status });
      });
  };