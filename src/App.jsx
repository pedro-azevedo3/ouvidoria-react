import GoodForm from "./components/GoodForm";

import "./App.css";
import MyReports from "./components/MyReports";
import Logo from "./assets/logo.png";
import { useState } from "react";

const App = () => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports([...reports, report]);
  };

  return (
    <div className="app-container">
      <header>
        <div className="first-image">
          <img src={Logo} alt="Logo Unifacisa" />
        </div>
      </header>

      <h1>My reports</h1>
      <MyReports reports={reports} />
      <hr />
      <h1>Report formulary</h1>
      <GoodForm addReport={addReport} />
    </div>
  );
};

export default App;
