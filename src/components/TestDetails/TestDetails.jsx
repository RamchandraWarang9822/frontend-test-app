/* eslint-disable react/prop-types */
import { } from "react";
import './TestDetails.css'
const TestDetails = ({openModal}) => {
    return (
        <>
            <div className="test-flex">
                <div className="test-details">
                    <img src="src\assets\html.svg" alt="" className="test-icon" />
                    <div>
                        <div className="test-title">Hypertext Markup Language</div>
                        <div className="test-description">
                            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
                        </div>
                    </div>
                </div>
                <button className="button" onClick={openModal}>Update</button>
            </div>

        </>
    );
};

export default TestDetails;
