import {} from "react";
import "./SyllabusWiseAnalysis.css";

const syllabusData = [
  {
    subject: "HTML Tools, Forms, History",
    percentage: 80,
    color: "#438AF6",
  },
  {
    subject: "Tags & References in HTML",
    percentage: 60,
    color: "#FF9142",
  },
  {
    subject: "Tables & CSS Basics",
    percentage: 25,
    color: "#FB5E5E",
  },
  {
    subject: "Tags & References in HTML",
    percentage: 60,
    color: "#2EC971",
  },
];

const SyllabusWiseAnalysis = () => {
  return (
    <div className="syllabus-wise-analysis">
      <div className="title">SyllabusWise Analysis</div>
      {syllabusData.map((subjectData, index) => (
        <div className="subject-block" key={index}>
          <div className="subject-title">{subjectData.subject}</div>
          <div className="bar-percent">
            <div className="bar-container" 
              style={{
                backgroundColor: subjectData.color,
              }}
            >
              <div
                className="bar"
                style={{
                  width: `${(subjectData.percentage / 100) * 250}px`,
                  backgroundColor: subjectData.color,
                }}
              ></div>
            </div>
            <div className="subject-percentage">{subjectData.percentage}%</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusWiseAnalysis;
