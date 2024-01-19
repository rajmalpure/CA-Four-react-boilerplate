// import React, { useContext } from 'react'
// import {marks} from './QuestionBox.js'

// export default function Result() {

//   return (
//     <div>
//       <h1>Final Score</h1>
//       <h2> out of 5</h2>
//       <h2></h2>
//       <button className='restart'>Restart</button>
//     </div>
//   )
// }

import React , {useContext} from 'react'
import { marks } from './QuestionBox.js'

export default function Result() {

  const score=useContext(marks)

  function restart(){
    <div>
      {document.location.reload()}
    </div>
  }

  return (
    <div>
      <h1>Final Score</h1>
      <h2>{score} out of 5</h2>
      <h2>({(score/5)*100}%)</h2>
      <button onClick={restart} className='restart'>Restart</button>
    </div>
  )
}

// import React , {useContext} from 'react'
// import { marks } from './QuestionBox.js'

// export default function Result() {

//   const score=useContext(marks)

//   function restart(){
//     <>
//       {window.location.reload(false)}
//     </>
//   }

//   return (
//     <div>
//       <h1>Final Score</h1>
//       <h2>{score} out of 5</h2>
//       <h2>({(score/5)*100}%)</h2>
//       <button onClick={restart} className='restart'>Restart</button>
//     </div>
//   )
// }