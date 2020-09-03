import React from "react";
import { connect } from "react-redux";
import { deleteAction } from "./actions/index";

const SmurfCard = ({ smurf, deleteAction }) => {
	return (
		<div className="smurf-card">
			<h2>{smurf.name}</h2>
			<p>Age: {smurf.age}</p>
			<p>Height: {smurf.height}</p>
            <button onClick={() => deleteAction(smurf.id)}>Delete</button>
		</div>
	);
};

export default connect(null, { deleteAction })(SmurfCard);