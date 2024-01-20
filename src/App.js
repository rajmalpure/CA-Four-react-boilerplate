import React, { useEffect, useState} from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";


function App() {
  let [color,setcolor]=useState(true)
  let[bgColor,setbgColor]=useState('')
  let[textColor,settextColor]=useState('')

  
  function backgroundChange(){
    setcolor(!color)
    let white='#FFFFFF'
    let violet='#8D79A2'
    let black='#000000'
    setbgColor(color?violet:white)
    settextColor(color?white:black)
  }

  return (
    <div style={{background: bgColor }} className="body">
      <div className="head">
        <h1 >Kalvium</h1>
        <button onClick={backgroundChange} className="modeBtn">
           {color ? 'Dark' : 'Light'}
        </button>
      </div>
      <div className="questionBox">
        <QuestionBox />
      </div>
      
    </div>

  );
}

export default App;
