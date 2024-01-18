import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

function App() {


  return (
    <div className="container" >
      <logo className="logo"></logo>
      <button className="light-dark"></button>
      <div className="question-container">   
      <button className="highlight">Highlight</button>
      <button className="remove-highlight">Remove Highlight</button>   
      </div>      
    </div>
  );
}

export default App;