import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [random, setRandom] = useState();
  const [guess, setGuess] = useState('');
  const [attempt, setAttempt] = useState(5);
  const [past, setPast] = useState([])

///console.log(attempt);
  function randomNamber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    setRandom(randomNamber(1, 100));
  }, []);
  
  const check = () => {
    if (guess > 100) {
      alert('вы ввели значение больше 100!');
    } else if (guess == random) {
      alert('вы угадали, загаданное число: ' + random);
    } else if (guess < random) {
      setAttempt(attempt - 1);
      alert('загаданное число больше');
    } else if (guess > random) {
      setAttempt(attempt - 1);
      alert('загаданное число меньше');
    };
    if (guess <= 100) {
      const number = guess  + ' ';
    setPast(oldArray => [...oldArray, number]);
    }
  };
  
  
    


  return (
    <div className= {styles.App}>
      <h1 className={styles.h1}>ИГРА УГАДАЙ ЧИСЛО</h1>
      <p className= {styles.p}>
        <p>Правила игры:</p>
        <p>1. Загаданно число от 1 до 100</p>
        <p>2. У вас есть 5 попыток, чтобы угадать его</p>
        </p>
        
      <div className= {styles.attempt}>Осталось попыток: {attempt}</div>

      <div>
        <input type='text' value={guess} onChange={(e) => setGuess(e.target.value)} className= {styles.guess}></input>
      </div>
      <button onClick={() => check()} className={styles.buttonCheck}>проверить</button>
      <button onClick={() => window.location.reload()} className= {styles.buttonReload}>заново</button>
      <div className={styles.past}>Ваши прошлые варинаты ответа: {past}</div>
    </div>
  );
}

export default App;
