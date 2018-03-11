import React, { Component } from 'react';

export default class TFNInput extends Component {
    constructor(props) {
        super(props);
    }

    handleTFNChange = (e) => {
        let currentTFNValue = e.target.value;
        console.log(`Current TFN value: ${currentTFNValue}`);
        this.props.handleChange(currentTFNValue);
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group mx-sm-3 mb-2">
                    <input
                        value={this.props.value}
                        placeholder="Enter TFN to check" type="text" className="form-control"
                        onChange={this.handleTFNChange}
                    />
                </div>
            </form>
        )
    }
}
