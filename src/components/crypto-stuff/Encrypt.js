import React, {Component} from "react"
import ReactDOM from "react-dom"
import {getTestTFN} from "../../utils/tfn-utils";


class Encrypt extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (

            <div>
                <div className="card">
                    <div className="card-header">
                        Encrypter
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Use this to AES-128 encrypt values</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <input
                                    placeholder="Secret Key" type="text" className="form-control"
                                />
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input
                                    placeholder="Enter text to encrypt" type="text" className="form-control"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                <button className="btn btn-primary mb-2" type="button">
                                    Encrypt!
                                </button>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <input disabled
                                    placeholder="Encrypted value" type="text" className="form-control"
                                />
                            </div>
                            <div className="col-md-6">

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Encrypt