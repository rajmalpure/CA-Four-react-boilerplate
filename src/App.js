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
    let gray='#747474'
    let black='#000000'
    setbgColor(color?gray:white)
    settextColor(color?white:black)
  }

  return (
    <div style={{background: bgColor }} className="body">
      <div className="head">
        <h1 >Kalvium</h1>
        <button onClick={backgroundChange} className="modeBtn">
           {color ? 'Light' : 'Dark'}
        </button>
      </div>
      <div className="questionBox">
        <QuestionBox />
      </div>
      
    </div>

  );
}

export default App;

// return (
//   <div style={{background: bgColor }} className="body">
//     <div className="head">
//       <h1 style={{color: textColor}}>Kalvium</h1>
//       <button onClick={backgroundchange} className="modeBtn">{color ?'Light':'Dark'}</button>
//     </div>
//     <div className="questionBox">
//       <QuestionBox />
//     </div>
    
//   </div>

// );



// import React, { useState } from "react";
// import "./App.css";
// import questions from "./questions";
// import Result from "./components/Result";
// import QuestionBox from "./components/QuestionBox";

// const App = () => {
//   const [color, setColor] = useState(true);
//   const [bgColor, setBgColor] = useState('');
//   const [textColor, setTextColor] = useState('');

//   const backgroundChange = () => {
//     setColor(!color);
//     const [white, gray, black] = ['#FFFFFF', '#747474', '#000000'];
//     setBgColor(color ? gray : white);
//     setTextColor(color ? white : black);
//   };

//   return (
//     <div style={{ background: bgColor }} className="body">
//       <div className="head">
//         <h1 style={{ color: textColor }}>Kalvium</h1>
//         <button onClick={backgroundChange} className="modeBtn">
//           {color ? 'Light' : 'Dark'}
//         </button>
//       </div>
//       <div className="questionBox">
//         <QuestionBox />
//       </div>
//     </div>
//   );
// };

// export default App;
