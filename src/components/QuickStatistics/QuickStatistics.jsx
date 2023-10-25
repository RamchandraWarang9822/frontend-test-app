import { } from "react";
import "./QuickStatistics.css";

const QuickStatistics = () => {
    return (
        <div className="quick-statistics">
            <div className="title">Quick Statistics
            <div/>
                <div className="statistics">
                    <div className="status-box rank">
                        <img src="src\assets\trophy.svg" alt="" className="status-icons" />
                        <div className="status-text-container">
                            <div className="status-value">12,890</div>
                            <div className="status-name">Your rank</div>
                        </div>
                    </div>

                    <div className="status-box percentile">
                        <img
                            src="src\assets\percentile.svg"
                            alt=""
                            className="status-icons"
                        />
                        <div className="status-text-container">
                            <div className="status-value">37%</div>
                            <div className="status-name">Percentile</div>
                        </div>
                    </div>

                    <div className="status-box correct-answers">
                        <img
                            src="src\assets\correct-answer.svg"
                            alt=""
                            className="status-icons"
                        />
                        <div className="status-text-container">
                            <div className="status-value">07/15</div>
                            <div className="status-name">Correct Answers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickStatistics;
