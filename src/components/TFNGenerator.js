import {getTestTFN} from "../utils/tfn-utils";
import React, {Component} from "react";

const TFNGenerator = (props) => {

    return (
        <div>
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <button className="btn btn-primary mb-2" type="button" onClick={props.handleChange.bind(this, getTestTFN())}>
                        Generate TFN
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TFNGenerator