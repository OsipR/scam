import logo from './logo.svg';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function App() {

  const text = `Значит так, на носу 2024 год, а мы не только не разработали план, но и не провели анализ текущего года. \r
Сейчас разберём, как это сделать. \r
Составьте полный список ваших удовлетворенных потребностей. Вспоминая о своих успехах, мы меняем мнение о себе, повышаем самооценку. Поэтому находимся в более ресурсном состоянии и чувствуем себя более полноценно. \r
Так мы создаем некую платформу ресурсов и энергии, на которой строятся все дальнейшие шаги. Поэтому так важно сначала подвести итоги, а потом планировать.`;

  var offers = text.split(".");
  var paragraphs = text.split("\r");
  var words = text.split(" "); 
  var letters = text.match(/[a-zA-Zа-яА-Я-0-9]/g);
  var offerOne = offers[0];
  var offerTwo = offers[1];
  var offerThree = offers[2];
  var offerFour = offers[3];
  var offerFive = offers[4];
  var offerSix = offers[5];
  var offerSeven = offers[6];
 // console.log(offersOne.length, offersTwo.length, offersThree.length, offersFour.length, offersFive.length, offersSix.length, offersSeven.length); 
  




  return (
    <div>
      <div>
        Значит так, на носу 2024 год, а мы не только не разработали план, но и не провели анализ текущего года.
        Сейчас разберём, как это сделать.
        Составьте полный список ваших удовлетворенных потребностей.  Вспоминая о своих успехах, мы меняем мнение о себе, повышаем самооценку. Поэтому находимся в более ресурсном состоянии и чувствуем себя более полноценно.
        Так мы создаем некую платформу ресурсов и энергии, на которой строятся все дальнейшие шаги. Поэтому так важно сначала подвести итоги, а потом планировать.
      </div>

      <div>
        <button onClick={() => alert('предложений в данном тексте: ' + (offers.length - 1))}>Кол-во предложений</button>
        <button onClick={() => alert('абзацев в данном тексте: ' + paragraphs.length)}>Кол-во абзацев</button>
        <button onClick={() => alert('слов в данном тексте: ' + words.length)}>Кол-во слов</button>
        <button onClick={() => alert('букв в данном тексте: ' + letters.length)}>Кол-во букв</button>
      </div>
    </div>
  );
}

export default App;
