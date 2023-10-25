import "./App.css";
import { ComparisionGraph, NavBar, QuickStatistics, SideBar, SyllabusWiseAnalysis, TestDetails } from "./components";
function App() {
  return (
    <>
      <NavBar />
      <div className="board-container">
        <SideBar />
        <div className="dashboard">
          <div className="top-text">Skill text</div>
          <div className="main-container">
            <div className="left-side">

            <TestDetails/>
            <QuickStatistics/>
            <ComparisionGraph/>
            </div>
            <div className="right-side">
              <SyllabusWiseAnalysis/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
