import {getTestTFN} from "../utils/tfn-utils";
import React, {Component} from "react";

export default class TFNGenerator extends Component {
    constructor(props) {
        super(props);
    }

    handleGeneratorClick = (e) => {
        console.log(`Generator button clicked...`);
        let generatedTFN = getTestTFN();
        console.log(`Generated tfn is: ${generatedTFN}`);
        this.props.handleChange(generatedTFN);

    }

    render() {
        return (
            <div>
                <form className="form-inline">
                    <div className="form-group mx-sm-3 mb-2">
                        <button className="btn btn-primary mb-2" type="button" onClick={this.handleGeneratorClick}>
                            Generate TFN
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
