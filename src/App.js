import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FaBeer from 'react-icons/lib/fa/beer';
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';


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
                                <TFNInput value={this.state.tfnToValidate} handleChange={this.updateTFNValue}/>
                            </div>
                            <div className="col-md-6">
                                <TFNValidityButton tfn={this.state.tfnToValidate} />
                            </div>
                        </div>
                        <TFNGenerator checkTFNValid={this.tfnValid} handleChange={this.updateTFNValue}/>
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
        this.dummyLogger();
    }

    dummyLogger() {
        console.log(`Helo world ;-) !`);
    }


    handleGeneratorClick = (e) => {
        console.log(`Generator button clicked...`);
        let generatedTFN = this.getTestTFN();
        console.log(`Generated tfn is: ${generatedTFN}`);
        this.props.handleChange(generatedTFN);

    }

    getTestTFN() {
        let seedNumber = Math.floor(100000000 + Math.random() * 900000000);
        const potentialCandidates = [];
        for(var i=1; i<= 51; i++) { potentialCandidates.push(seedNumber + i); }
        const valTFNs = [];
        potentialCandidates.forEach((item) => {
            if(this.validTFNFormat(item + '')) {
                valTFNs.push(item);
            }
        });
        return valTFNs[0];
    }

    validTFNFormat(tfn) {
        if(tfn.trim().length != 9) { return false; }
        const checkSumWeights = [10, 7, 8, 4, 6, 3, 5, 2, 1];
        var sum = 0;
        String(tfn).split('').forEach(function(item, index) {
            sum = sum + (item * checkSumWeights[index]);
        })
        return (sum % 11) === 0;
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


    tfnValid(tfn) {
        let tfnValid = false;
        console.log(`tfn is: ${tfn}`);
        if (tfn.trim().length !== 9) {
            return false;
        }
        const checkSumWeights = [10, 7, 8, 4, 6, 3, 5, 2, 1];
        var sum = 0;
        String(tfn).split('').forEach(function (item, index) {
            sum = sum + (item * checkSumWeights[index]);
        });
        tfnValid = (sum % 11) === 0;

        return tfnValid;
    }

    render() {
        return (
            <div>
                {
                    this.tfnValid(this.props.tfn.toString()) ?
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
