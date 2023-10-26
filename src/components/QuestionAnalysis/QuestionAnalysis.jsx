/* eslint-disable react/prop-types */
import React from 'react'
import "./QuestionAnalysis.css";
import DonutChart from "react-d3-donut";

const QuestionAnalysis = ( {data, tempData}  ) => {
  return (
    <div className="question-analysis">
      <div className="question-top-bar">
        <div className="title">Question Analysis</div>
        <div className="marks">{tempData[2].value}/15</div>
      </div>
      <div className="question-botton-bar">
        <div className="desc">
          You scored {tempData[2].value} question correct out of 15. However it still needs some
          improvements
          
        </div>
        <DonutChart
          innerRadius={60}
          outerRadius={90}
          transition={true}
          svgClass="donut-chart"
          pieClass="pie"
          displayTooltip={true}
          strokeWidth={0}
          data={data}
          />
          {/* <img src="src\assets\bullseye.svg" alt="" className="bullseye"/> */}
      </div>
    </div>
  );
};

export default QuestionAnalysis;
