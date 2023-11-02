import React from 'react'

function Result(props) {
  return (
    <div className='resultScreen'>
  <div>
    <h1>
      THANK YOU
    </h1>
  </div> <hr />
  <div>
  <h1>
    Your Score: 
    {props.score}
  </h1>
  <h1>
    Percentage: 
    {Math.round(props.score*100/props.questionLength)}
  </h1>
  </div>
 </div>
  )
}

export default Result