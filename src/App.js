// import Vedio from "./components/Vedio";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
    }
  };
  return (
    <>
      <Navbar
        title="Navbar"
        home="Home"
        about="About"
        mode={mode}
        togglemode={toggleMode}
      />
      <Alert alert="Only 5 min are reamaining" />

      <div className="container my-3">
        <TextForm heading="Enter your Details please" mode={mode} />
      </div>
    </>
  );
}
export default App;
