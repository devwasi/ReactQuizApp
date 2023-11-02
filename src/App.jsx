import { useState } from 'react';
import './App.css';
import QuestionScreen from './componants/questionScreen/QuestionScreen';

function App() {
const [start, setStart] = useState(false)
const [name, setName] = useState("")

const startBtn=(e)=>{
  console.log(name)
if(e){
setStart(true)
}
}

 return (
 start ? <QuestionScreen />
 :
 <div className='main'>
  <div>
    <h1>
      Quiz App
    </h1>
  </div><br /><hr />
  <div>
    <div>
      <input type="text" placeholder='name' className='nameInput' onClick={(e)=>setName(e.target.value)} />
    </div>
  </div>
  <div>
    <button className='startBtn' onClick={()=>startBtn(true)}>
      Start
    </button>
  </div>
 </div>
 )
}

export default App;
