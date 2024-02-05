import { useState, useEffect } from "react";
import styles from './Goroscop.module.css'
import imgVodoley from './imgVodoley.jpg'


function Gor() {

  const [inpute, setInpute] = useState("");
  // console.log(inpute)

  const [ovenText, setOvenText] = useState(false);
  const [vodoleyText, setVodoleyText] = useState(false);

  // const imgVodoley = "C:/Users/osipr/Pictures/zod/images.jpg"
  
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  const years = days * 365;

  const d1 = new Date(inpute);
  const d2 = new Date();
  const lifeTime1 = d1.getTime();
  const lifeTime2 = d2.getTime();
  // const average = lifeTime2 - lifeTime1;
  // console.log(average)


  const LifeYears = Math.floor((lifeTime2 - lifeTime1) / years);
  const LifeDays = Math.floor((lifeTime2 - lifeTime1) / days);
  const LifeHours = Math.floor((lifeTime2 - lifeTime1) / hours);
  const LifeMinutes = Math.floor((lifeTime2 - lifeTime1) / minutes);

function bek() {




  const splitInput = inpute.split('-');
  const monthDay = new Date(splitInput[1] + '-' + splitInput[2]);
  const monthDayTime = monthDay.getTime();
  // console.log(monthDay, monthDayTime)

  // const month = inpute.getMonth() + 1;
  // const day = inpute.getDate();
  // const monthDay = new Date ( month + '-' + day)
  // const monthDayTime = monthDay.getTime();

  const ovenStart = new Date('03-21');
  const ovenStartTime = ovenStart.getTime();
  const ovenEnd = new Date('04-20');
  const ovenEndTime = ovenEnd.getTime();
  // console.log(ovenStart, ovenEnd, ovenEndTime)

  const telecStart = new Date('04-21');
  const telecStartTime = telecStart.getTime();
  const telecEnd = new Date('05-21');
  const telecEndTime = telecEnd.getTime();
  // console.log(telecStart, telecEnd, telecStartTime)

  const bliznecStart = new Date('05-22');
  const bliznecStartTime = bliznecStart.getTime();
  const bliznecEnd = new Date('06-21');
  const bliznecEndTime = bliznecEnd.getTime();

  const rakStart = new Date('06-22');
  const rakStartTime = rakStart.getTime();
  const rakEnd = new Date('07-22');
  const rakEndTime = rakEnd.getTime();

  const levStart = new Date('07-23');
  const levStartTime = levStart.getTime();
  const levEnd = new Date('08-21');
  const levEndTime = levEnd.getTime();

  const devaStart = new Date('08-22');
  const devaStartTime = devaStart.getTime();
  const devaEnd = new Date('09-23');
  const devaEndTime = devaEnd.getTime();

  const vesiStart = new Date('09-23');
  const vesiStartTime = vesiStart.getTime();
  const vesiEnd = new Date('10-23');
  const vesiEndTime = vesiEnd.getTime();

  const skorpionStart = new Date('10-24');
  const skorpionStartTime = skorpionStart.getTime();
  const skorpionEnd = new Date('11-22');
  const skorpionEndTime = skorpionEnd.getTime();

  const strelecStart = new Date('11-23');
  const strelecStartTime = strelecStart.getTime();
  const strelecEnd = new Date('12-22');
  const strelecEndTime = strelecEnd.getTime();

  const kozerogStart = new Date('12-23');
  const kozerogStartTime = kozerogStart.getTime();
  // const kozerogEnd1 = new Date ('12-31');
  // const kozerogEndTime1 = kozerogEnd1.getTime();
  // const kozerogStart2 = new Date ('01-01');
  // const kozerogStartTime2 = kozerogStart2.getTime();
  const kozerogEnd = new Date('01-20');
  const kozerogEndTime = kozerogEnd.getTime();
  // console.log(kozerogStart, kozerogEnd)

  const vodoleyStart = new Date('01-21');
  const vodoleyStartTime = vodoleyStart.getTime();
  const vodoleyEnd = new Date('02-19');
  const vodoleyEndTime = vodoleyEnd.getTime();

  const ribiStart = new Date('02-20');
  const ribiStartTime = ribiStart.getTime();
  const ribiEnd = new Date('03-20');
  const ribiEndTime = ribiEnd.getTime();

  // const drt = new Date (985122000000);
  // console.log(drt + "drt")

  switch  (true) {
    case monthDayTime >= ovenStartTime && monthDayTime <= ovenEndTime:
      alert('oven');
      setOvenText(!false);
      break;
    case monthDayTime >= telecStartTime && monthDayTime <= telecEndTime:
      alert('telec');
      break;
    case monthDayTime >= bliznecStartTime && monthDayTime <= bliznecEndTime:
      alert('bliznec');
      break;
    case monthDayTime >= rakStartTime && monthDayTime <= rakEndTime:
      alert('rak');
      break;
    case monthDayTime >= levStartTime && monthDayTime <= levEndTime:
      alert('lev');
      break;
    case monthDayTime >= devaStartTime && monthDayTime <= devaEndTime:
      alert('deva');
      break;
    case monthDayTime >= vesiStartTime && monthDayTime <= vesiEndTime:
      alert('vesi');
      break;
    case monthDayTime >= skorpionStartTime && monthDayTime <= skorpionEndTime:
      alert('skorpion');
      break;
    case monthDayTime >= strelecStartTime && monthDayTime <= strelecEndTime:
      alert('strelec');
      break;
    case monthDayTime >= kozerogStartTime:
      alert('kozerog');
      break;
    case monthDayTime <= kozerogEndTime:
      alert('kozerog');
      break;
    case monthDayTime >= vodoleyStartTime && monthDayTime <= vodoleyEndTime:
      alert('vodoley');
      setVodoleyText(!false);
      break;
    case monthDayTime >= ribiStartTime && monthDayTime <= ribiEndTime:
      alert('ribi');
      break;
    default:
      
  }

  return(
    {}
  )

  }


  

  return (
    <div className={styles.App}>  
      <h1 className={styles.H}>ГОРОСКОП</h1>
      <h2 className={styles.H}>хотите узнать про свой знак зодиака? Легко!</h2>
      
        <div>
          <div  className={styles.bday}>Введите дату вашего рождения:</div>
          <input className={styles.input} type="date" id="bday" name="bday" value={inpute} onChange={(event) => setInpute(event.target.value)} />
          
          <button onClick={bek}>ТЫК!</button>
        </div>
      
      <button className={styles.buttonRel} onClick={() => window.location.reload()}>заново</button>
      {ovenText? <div></div> : null }
      {vodoleyText? <div className={styles.vodoley}>
        <div className={styles.znak}>ВОДОЛЕЙ</div>
        <div className={styles.life}>Вы прожили уже: {LifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        <img className={styles.img} src = {imgVodoley}  alt="" />
        Водолея можно представить как некого прогрессивного мудреца гороскопа. И это неслучайно, ведь он является одним из завершающих знаков зодиака, находящихся в зоне Учителя, который впитал в себя весь коллективный опыт и имеет доступ к более сложным энергиям. Поэтому среди Водолеев встречается много наставников, новаторов и изобретателей в глобальном смысле. Да и в мировых легендах Водолей упоминается как один из создателей мира людей, создатель системы. Неслучайно он соответствует архетипу Юнга Правителя, чьи ключевые черты — это конкретика, систематизация, управление.
        </div> : null }
      <a className={styles.ref} href="https://github.com/OsipR"> Vladimir Osip</a>
      {/* <img className={styles.background} src="https://images.wallpapershq.com/wallpapers/3505/wallpaper_3505_3840x2160.jpg" alt=''/> */}
    </div>
  )


};
export default Gor;