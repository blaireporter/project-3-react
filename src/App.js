import './App.css';
import { useState, useEffect } from 'react';


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
        <button onClick={getResults} className={isActive ? "active" : ""}>click to get fortune</button> 
        {fortune && <p className="">{fortune}</p>}
        <p>type your question above</p>
      </div>
    </main>
  )
}

export default App;

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

