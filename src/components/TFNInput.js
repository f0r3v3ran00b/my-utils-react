import React, { Component } from 'react';

const TFNInput = (props) => {
    return (
        <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
                <input
                    value={props.value}
                    placeholder="Enter TFN to check" type="text" className="form-control"
                    onChange={props.handleChange.bind(this, )}
                />
            </div>
        </form>
    )
}

export default TFNInput