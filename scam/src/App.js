import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [random, setRandom] = useState();
  const [guess, setGuess] = useState('');
  const [attempt, setAttempt] = useState(5);

console.log(attempt);
  function randomNamber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    setRandom(randomNamber(1, 100));
  }, []);
  
  const check = () => {
    if (guess == random) {
      alert('вы угадали, загаданное число: ' + random);
    } else if (guess < random) {
      setAttempt(attempt - 1);
      alert('загаданное число больше');
    } else if (guess > random) {
      setAttempt(attempt - 1);
      alert('загаданное число меньше');
    };
  };
  

  
    


  return (
    <div>
      <div>{random}</div>
      <div>Осталось попыток: {attempt}</div>

      <div>
        <input type='text' value={guess} onChange={(e) => setGuess(e.target.value)}></input>
      </div>
      <button onClick={() => check()}>проверить</button>
      <button onClick={() => window.location.reload()}>заново</button>
    </div>
  );
}

export default App;
