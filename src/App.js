import React, { Component } from "react";
import "./App.css";
import { tfnValid, getTestTFN } from "./utils/tfn-utils.js";
import TFNValidityButton from "./components/TFNValidityButton.js";
import TFNInput from "./components/TFNInput.js";
import TFNGenerator from "./components/TFNGenerator.js";
import AutoComplete from "./components/AutoComplete";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tfnToValidate: ""
    };
  }

  componentDidMount() {}

  updateTFNValue = tfn => {
    let tfnInParent = tfn;
    console.log(`Value of tfn in parent: ${tfnInParent}`);
    this.setState({
      tfnToValidate: tfnInParent
    });
  };

  tfnUpdateHandler = e => {
    let tfnInParent = e.target.value;
    console.log(`Value of tfn in parent: ${tfnInParent}`);
    this.updateTFNValue(tfnInParent);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="card my-card">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6">
                  <TFNInput
                    value={this.state.tfnToValidate}
                    handleChange={this.tfnUpdateHandler}
                  />
                </div>
                <div className="col-md-6">
                  <TFNValidityButton tfn={this.state.tfnToValidate} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <TFNGenerator
                    checkTFNValid={this.tfnValid}
                    handleChange={this.updateTFNValue}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <AutoComplete />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
} // End component App

export default App;
