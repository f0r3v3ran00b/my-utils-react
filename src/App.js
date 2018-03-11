import React, { Component } from 'react';
import './App.css';
import { tfnValid, getTestTFN } from './utils/tfn-utils.js'
import TFNValidityButton from './components/TFNValidityButton.js'
import TFNInput from './components/TFNInput.js'
import TFNGenerator from './components/TFNGenerator.js'

class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
            tfnToValidate: ""
        }
      }

    componentDidMount() {}

    updateTFNValue = (tfn) => {
        let tfnInParent = tfn;
        console.log(`Value of tfn in parent: ${tfnInParent}`);
        this.setState({
            tfnToValidate: tfnInParent
        });
    }


    render() {
        return (
          <div className="App">
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <TFNInput value={this.state.tfnToValidate} handleChange={this.updateTFNValue}/>
                                    <div class="input-group-append">
                                        <TFNValidityButton tfn={this.state.tfnToValidate} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div class="input-group mb-3">
                                    <TFNGenerator checkTFNValid={this.tfnValid} handleChange={this.updateTFNValue}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        )
  }
} // End component App

export default App;
