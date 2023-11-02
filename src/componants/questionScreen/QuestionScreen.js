import { useState } from 'react';
import './QuestionScreen.css';

function QuestionScreen() {

  const [count, setCount] = useState(0)
  const [length, setLength] = useState(true)
  const [score, setScore] = useState(0)
  
  const questionData = [
    {
      question: "who is founder of pakistan",
      options: [
        "MA JINNAH",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "MA JINNAH"
    },
    {
      question: "who is founder of india",
      options: [
        "GANDHI",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "MA JINNAH"
    },
    {
      question: "who is founder of pakistan",
      options: [
        "MA JINNAH",
        "LIAQAT ALI KHAN",
        "FATIMA JINNAH",
        "BEGUM RA'ANA LIAQAT"
      ],
      answer: "MA JINNAH"
    },
  ]

  const nextQuestion =()=>{    
    const next = count+1
    if(next<questionData.length){
        setCount(next)
      }
      else{
        console.log("end of era")
        setLength(false)
      }
      console.log(count, "next===>",next,length);
  }

  const btnClicked = (e)=>{
if(e === questionData[count].answer){
  setScore((prev)=>prev+1)
}
nextQuestion()
}
  return ( length ?
 <div className='questionScreen'>
  <div >
    <div className='quizApp'>
      <h1>Quiz App</h1>
    </div> <hr />
    <div className='questionCount'>
      <h3>
      Question {count+1}/{questionData.length}
      </h3>
    </div>
<div>
  <h4>
  {questionData[count].question}
  </h4>
  </div> 
  <div className='optionsMain'>
    {
      questionData[count].options.map((e,i)=>{
        return <div key={i} >  
        <button className='optionsBtn' onClick={()=>btnClicked(e)}>
          {e}
        </button>
        </div>
      })
    }
  </div>
    
  </div>
 </div>
 :
 <div className='resultScreen'>
  <div>
    <h1>
      THANK YOU
    </h1>
  </div> <hr />
  <div>
  <h1>
    Your Score: {score}
  </h1>
  <h1>
    Percentage: {Math.round(score*100/questionData.length)}
  </h1>
  </div>
 </div>
  );
}

export default QuestionScreen;
