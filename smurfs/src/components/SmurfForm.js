import React, { useState } from "react";
import { connect } from "react-redux";

import { getData, postData } from "./actions/index";

const SmurfForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    const [inputValues, setInputValues] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.postData(inputValues);
        setInputValues({
            name: "",
            age: "",
            height: ""
        });
    };

  return (
    <>
      {props.isFetchingData ? (
        <div>we are fetching data</div>
      ) : (
        <button onClick={handleGetData}>See a smurf village</button>
      )}
      <div>
			<form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
				<input
					type="text"
                    name="name"
                    id="name"
					value={inputValues.name}
					onChange={handleChange}
					placeholder="Name"
				/>
                <label htmlFor="age">Age:</label>
				<input
					type="text"
                    name="age"
                    id="age"
					value={inputValues.age}
					onChange={handleChange}
					placeholder="Age"
				/>
                <label htmlFor="height">Height:</label>
				<input
					type="text"
                    name="height"
                    id="height"
					value={inputValues.height}
					onChange={handleChange}
					placeholder="Height"
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
    </>
  );
};
const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData,
    isPostingData: state.isPostingData
  };
};

export default connect(
  mapStateToProps,
  { getData, postData }
)(SmurfForm);