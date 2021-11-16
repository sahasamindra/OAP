// import logo from "./logo.svg";
// import "./App.css";
import Landing from "./components/landingPage/Landing";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Registration from "./components/registrationPage/Registration";

function App() {
  return (
    <div>
      {/* <div className="App"> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;
