import React from "react";
import { connect } from "react-redux";

const SmurfCard = ({ smurf }) => {
	return (
		<div className="smurf-card">
			<h2>{smurf.name}</h2>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
		</div>
	);
};

export default connect(null, { })(SmurfCard);