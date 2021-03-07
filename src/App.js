import './App.css';
import { useState, useEffect } from 'react';
import Images from "./Images.js"
import FortuneReveal from './FortuneReveal'

function App() {
  const [fortune, setFortune] = useState('');
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    // getResults();
  },[])

  const getResults = () => {
    fetch('https://8ball.delegator.com/magic/JSON/""')
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log("jsonResponse", jsonResponse)
        setFortune(jsonResponse.magic.answer)
      })

  }

  

  return (
    <main>
      <div>
        <h1>magic 8 ball time</h1>
        <Images />
        <button onClick={getResults} className={isActive ? "active" : ""}>click to get fortune</button> 
        {
          fortune && 
          <div className="clicked-fortune">
            <FortuneReveal/>
            <p className="fortune-message clicked">{fortune}</p>
          </div>
        }
      </div>
    </main>
  )
}

export default App;


// onChange = {< FortuneReveal className = "clicked" />}

// return (
//     <div>
//       <h1>magic 8 ball time</h1>
//       <button onClick={() => setFortune(!fortune)} >click to get fortune</button>
//       {
//         fortune === true
//           ? <p>{fortune}</p>
//           : <p>type your question above</p>
//       }
//     </div>
//   )

