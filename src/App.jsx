import { useState, useEffect } from "react";
import "./App.css";
import {
  ComparisionGraph,
  Modal,
  NavBar,
  QuickStatistics,
  SideBar,
  SyllabusWiseAnalysis,
  TestDetails,
  QuestionAnalysis,
} from "./components";

function App() {
  const [rank, setRank] = useState(12890);
  const [percentile, setPercentile] = useState(37);
  const [score, setScore] = useState(7);
  
  const initialDonutData = [
    {
      count: 70,
      color: "#438AF6",
      name: "My name",
    },
    {
      count: 30,
      color: "rgba(67, 138, 246, 0.10)",
      name: "XCS",
    },
  ];

  const [donutData, setDonutData] = useState(initialDonutData);

  const updateDonutData = () => {
    const scorePercentage = (tempData[2].value / 15) * 100;
    const remainingPercentage = 100 - scorePercentage;

    const updatedDonutData = [
      { count: scorePercentage, color: "#438AF6", name: "My name" },
      { count: remainingPercentage, color: "rgba(67, 138, 246, 0.10)", name: "XCS" },
    ];

    setDonutData(updatedDonutData);
  };


  const [tempData, setTempData] = useState([
    { question: "Update your rank", value: rank },
    { question: "Update your percentile", value: percentile },
    { question: "Update your current score (out of 15)", value: score },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleInputChange = (index, event) => {
    const newValue = parseInt(event.target.value);
  
    if (index === 1) {
      const limitedValue = Math.min(newValue, 100);
      const updatedData = tempData.map((item, i) =>
        i === index ? { ...item, value: limitedValue } : item
      );
      setTempData(updatedData);
    } else if (index === 2) {
      const limitedValue = Math.min(newValue, 15);
      const updatedData = tempData.map((item, i) =>
        i === index ? { ...item, value: limitedValue } : item
      );
      setTempData(updatedData);
    } else {
      const updatedData = tempData.map((item, i) =>
        i === index ? { ...item, value: newValue } : item
      );
      setTempData(updatedData);
    }
  };
  
  

  const handleSaveChanges = () => {
    // Apply the changes to the actual state (rank, percentile, score)
    setRank(tempData[0].value);
    setPercentile(tempData[1].value);
    setScore(tempData[2].value);

    closeModal();
  };

  useEffect(() => {
    updateDonutData();
  }, [tempData ]);

  return (
    <div className="App">
      <Modal isOpen={isOpen}>
        <div className="modal-top-bar">
          <h2>Update Scores</h2>
          <img src="src\assets\html.svg" alt="" />
        </div>
        <form action="" className="update-form">
          {tempData.map((item, index) => (
            <div className="input-container" key={index}>
              <div className="input">
                <div className="input-number">{index + 1}</div>
                <div className="input-question">{item.question}</div>
              </div>
              <input
                className="update-input"
                type="number"
                name=""
                id=""
                value={item.value}
                onChange={(event) => handleInputChange(index, event)}
              />
            </div>
          ))}
          <div className="button-group">
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
            <button type="button" className="button" onClick={handleSaveChanges}>
              Save
            </button>
          </div>
        </form>
      </Modal>
      <NavBar />
      <div className="board-container">
        <SideBar />
        <div className="dashboard">
          <div className="top-text">Skill text</div>
          <div className="main-container">
            <div className="left-side">
              <TestDetails openModal={openModal} />
              <QuickStatistics data={tempData} />
              <ComparisionGraph data={tempData}/>
            </div>
            <div className="right-side">
              <SyllabusWiseAnalysis />
              <QuestionAnalysis data={donutData} tempData={tempData}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
