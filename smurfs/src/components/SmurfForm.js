import React from "react";
import { connect } from "react-redux";

import { getData, postData } from "./actions";

const SmurfForm = props => {
  const handleGetData = e => {
    e.preventDefault();
    props.getData();
  };
  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData}>See a smurf village</button>
      )}
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(SmurfForm);