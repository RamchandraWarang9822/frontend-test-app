import { useState } from "react";
import "./App.css";
import { ComparisionGraph, Modal, NavBar, QuickStatistics, SideBar, SyllabusWiseAnalysis, TestDetails } from "./components";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content inside the modal.</p>
      </Modal>
      <NavBar />
      <div className="board-container">
        <SideBar />
        <div className="dashboard">
          <div className="top-text">Skill text</div>
          <div className="main-container">
            <div className="left-side">

            <TestDetails openModal={openModal}/>
            <QuickStatistics/>
            <ComparisionGraph/>
            </div>
            <div className="right-side">
              <SyllabusWiseAnalysis/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
