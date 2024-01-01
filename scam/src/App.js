import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const [text, setText] = useState('');

  const offers = text.split(".").filter(item => item != "");
  const paragraphs = text.split("\r");
  const words = text.split(" ");
  const letters = text.match(/[a-zA-Zа-яА-Я-0-9]/g);
  const maxLengthOffers = Math.max(...offers.map(item => item.length));
  const longestOffer = offers.filter(item => item.length == maxLengthOffers);
  const minLengthOffers = Math.min(...offers.map(item => item.length));
  const shortestOffer = offers.filter(item => item.length == minLengthOffers);
  const middleLength = Math.round(offers.map(item => item.length).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0) / offers.length);




  return (
    <div>
      <div>
        <input type= 'text' value={text} onChange={(e)=> setText(e.target.value)}></input>
      </div>

      <div>
        <button onClick={() => alert('предложений в данном тексте: ' + (offers.length))}>Кол-во предложений</button>
        <button onClick={() => alert('абзацев в данном тексте: ' + paragraphs.length)}>Кол-во абзацев</button>
        <button onClick={() => alert('слов в данном тексте: ' + words.length)}>Кол-во слов</button>
        <button onClick={() => alert('букв в данном тексте: ' + letters.length)}>Кол-во букв</button>
        <button onClick={() => alert('саммое длинное предложение: ' + longestOffer)}>Саммое длинное предложение</button>
        <button onClick={() => alert('саммое длинное предложение: ' + shortestOffer)}>Саммое короткое предложение</button>
        <button onClick={() => alert('саммое длинное предложение: ' + middleLength)}>Средняя длина предложений</button>
      </div>
    </div>
  );
}

export default App;
