import React, { Component } from 'react';
import {tfnValid} from "../utils/tfn-utils";
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up';
import FaThumbsODown from 'react-icons/lib/fa/thumbs-o-down';


const TFNValidityButton = (props) => {

    return (
            <div>
                {
                    tfnValid(props.tfn.toString()) ?
                        <button className="btn btn-success mb-2" type="button">
                            Valid <FaThumbsOUp/><span className="badge"></span>
                        </button> :
                        <button className="btn btn-danger mb-2" type="button">
                            Invalid <FaThumbsODown/><span className="badge"></span>
                        </button>
                }
            </div>
    );
}

export default TFNValidityButton;