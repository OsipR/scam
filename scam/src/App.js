import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {
  const [matrix, setMatrix] = useState([]);

const [X, setX] = useState(10);
const [Y, setY] = useState(10);

  useEffect ( ()=>{
  var countElement = X * Y;
  var Array = []
  for ( let i = 0; i < countElement; i++){
        Array.push (i)    
}

    setMatrix(Array)
},[])

let matrixTable = [];

for (let i = 0; i < Y; i++ )
matrixTable.push(matrix.filter((value, index) => index >= 0 + (i * X) && index <= X + (i * X - 1)));

const matrixView = matrixTable.map(row => <div className={styles.row}>{row.map(item =><button onClick={ () => { setY(item); setX(item); }} className= {styles.itemTable}>{item}</button> )}</div>)
  return (
    <div className={styles.App}>
      <div className={styles.table}>{matrixView}</div>

      <div className={styles.buttons}>
      <button onClick={() => { setMatrix(matrix.map(item => item + 10)) }}>add value 10</button>
      <button onClick={() => { setMatrix([...matrix.reverse()]) }}>reverse matrix</button>
      </div>
    </div>


  );
}

export default App;
