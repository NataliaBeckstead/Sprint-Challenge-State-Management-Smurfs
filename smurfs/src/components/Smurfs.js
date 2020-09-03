import React from "react";
import { connect } from "react-redux";
import SmurfCard from "./SmurfCard";

const Smurfs = props => {
    return (
        <>
          {props.error ? (
            <div className="error">{props.error}</div>
          ) : (
            props.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} />)
          )}
        </>
      );
    };
    
const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {}
)(Smurfs);