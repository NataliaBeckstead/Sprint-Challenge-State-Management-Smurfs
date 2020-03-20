import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const SET_ERROR = "SET_ERROR";
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("http://localhost:3333/smurfs")
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
export const postData = smurf => dispatch => {
    dispatch({ type: POST_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        dispatch({ type: POST_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("error", err.response);
        dispatch({ type: POST_FAILURE, payload: err.response.status });
      });
  };
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";
export const deleteAction = smurfId => dispatch => {
	dispatch({ type: DELETE_SMURF });
	axios
		.delete(`http://localhost:3333/smurfs/${smurfId}`)
		.then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
		.catch(err =>
			dispatch({
				type: DELETE_SMURF_FAILURE,
				payload: `${err.response.status} ${err.response.statusText}`
			})
		);
};