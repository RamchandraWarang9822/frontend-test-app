/* eslint-disable react/prop-types */
import React from 'react'
import "./QuickStatistics.css";

const QuickStatistics = ({data}) => {
  return (
    <div className="quick-statistics">
      <div>
        <div className="title">Quick Statistics</div>

        <div className="statistics">
          <div className="status-box rank">
            <img src="src\assets\trophy.svg" alt="" className="status-icons" />
            <div className="status-text-container">
              <div className="status-value">{data[0].value}</div>
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
              <div className="status-value">{data[1].value}%</div>
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
              <div className="status-value">{data[2].value}/15</div>
              <div className="status-name">Correct Answers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStatistics;
