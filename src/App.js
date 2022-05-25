import logo from "./logo.svg";
import "./App.css";
import { SelectInput, TextInput } from "./pages/Inputs";
import { Route, Routes } from "react-router-dom";
import Nav from "./common/Nav";
import { FaPlus } from "react-icons/fa";
import { FcAddDatabase, FcDeleteDatabase } from "react-icons/fc";


import { useState } from "react";

function App() {
  const [title, setTitle] = useState("Report");
  const [pat, setPat] = useState(["A", "B", "C", "D", "E", "F"]);

  const [patName, setPatName] = useState();
  const AddPat = () => {
    setPat(patName);
  };
  return (
    <div className="container">
      <Nav />
      <header className="App-header">
        <h1>{title}</h1>
        <input
          onChange={(e) => setPatName(e.target.value)}
          value={patName}
          className="form-control m-3"
          type="text"
          name="pname"
          id="pname"
        />
        <div className="mb.5">
        <button
            onClick={() => {
              if(patName === "")
                return;
              setPat((oldArray) => [...oldArray, patName]);
              setPatName("");
            }}
            className="btn btn-primary btn-lg px-4"
          >
            <FcAddDatabase /> Create New
          </button>&nbsp;
          <button
            onClick={() => {
              if(patName === "")
                return;
              setPat(pat.filter(item => item !== patName));
              setPatName("");
            }}
            className="btn btn-primary btn-lg px-4"
          >
            <FcDeleteDatabase /> Delete
          </button>
        </div>
        <ul>
          {pat.map((p) => (
            <li>{p}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
