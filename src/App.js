import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaBeer from 'react-icons/lib/fa/beer';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';
import { tfnValid, getTestTFN } from './utils/tfn-utils.js'


class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
            tfnToValidate: "",
            tfnValid: false
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

class TFNInput extends Component {
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

class TFNGenerator extends Component {
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



class TFNValidityButton extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    tfnValid(this.props.tfn.toString()) ?
                        <button className="btn btn-success mb-2" type="button">
                            Valid <FaThumbsOUp/><span className="badge"></span>
                        </button> :
                        <button className="btn btn-danger mb-2" type="button">
                            Invalid <FaThumbsODown/><span className="badge"></span>
                        </button>
                }
            </div>
        )
    }
}

export default App;
