import './App.css';
import { useState, useEffect } from 'react';
import MagicEightBallImage from "./MagicEightBallImage";
import FortuneReveal from './FortuneReveal';
import TitleText from './TitleText';
import Input from './Input';

// import './assets/css/fonts.css';

function App() {
  const [fortune, setFortune] = useState('');
  const [isShook, setIsShook] = useState(false);
  const [isShaken, setIsShaken] = useState(false);


  useEffect(() => {
    // getResults();
  }, [])

  const getResults = () => {
    fetch('https://8ball.delegator.com/magic/JSON/""')
      .then(response => {
        return response.json()
      })
      .then(jsonResponse => {
        console.log("jsonResponse", jsonResponse);
        setFortune(jsonResponse.magic.answer);
        document.querySelector('input').value = "";
      })
      setIsShook(!isShook);
      setIsShaken(!isShaken);
  }

  return (
    <main className="background">
      <section className="info">
        <TitleText/>
        <Input />
        <button type="submit" value="submit" onClick={getResults}>shake me</button>
      </section>
      <section className={isShook ? "shook" : "shake"}>
        <MagicEightBallImage/>
          {
            fortune &&
            <div className={isShaken ? "clicked2" : "clicked"}>
              <FortuneReveal fortune={fortune}/>
          </div>
          }
      </section>
    </main>
  )
}

export default App;


