import React from "react";
import { connect } from "react-redux";

const Smurfs = props => {
    return (
        <>
          {props.error ? (
            <div className="error">{props.error}</div>
          ) : (
            props.smurfs.map(smurf => <div>{smurf}</div>)
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