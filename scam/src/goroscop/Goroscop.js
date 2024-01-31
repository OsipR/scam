import { useState, useEffect } from "react";

function Gor() {

  const [inpute, setInpute] = useState("");

  // console.log(inpute)
function bek() {
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


  const lifeYears = Math.floor((lifeTime2 - lifeTime1) / years);
  const LifeDays = Math.floor((lifeTime2 - lifeTime1) / days);
  const LifeHours = Math.floor((lifeTime2 - lifeTime1) / hours);
  const LifeMinutes = Math.floor((lifeTime2 - lifeTime1) / minutes);


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

  switch (true) {
    case monthDayTime >= ovenStartTime && monthDayTime <= ovenEndTime:
      alert('oven');
      return(
      <div>
        <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
      </div>
      )
      break;
    case monthDayTime >= telecStartTime && monthDayTime <= telecEndTime:
      alert('telec');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= bliznecStartTime && monthDayTime <= bliznecEndTime:
      alert('bliznec');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= rakStartTime && monthDayTime <= rakEndTime:
      alert('rak');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= levStartTime && monthDayTime <= levEndTime:
      alert('lev');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= devaStartTime && monthDayTime <= devaEndTime:
      alert('deva');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= vesiStartTime && monthDayTime <= vesiEndTime:
      alert('vesi');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= skorpionStartTime && monthDayTime <= skorpionEndTime:
      alert('skorpion');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= strelecStartTime && monthDayTime <= strelecEndTime:
      alert('strelec');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= kozerogStartTime:
      alert('kozerog');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime <= kozerogEndTime:
      alert('kozerog');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= vodoleyStartTime && monthDayTime <= vodoleyEndTime:
      alert('vodoley');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    case monthDayTime >= ribiStartTime && monthDayTime <= ribiEndTime:
      alert('ribi');
      return(
        <div>
          <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
        </div>
        )
      break;
    default:
      
  }
  }


  


  return (
    <div>
      <h1>ГОРОСКОП</h1>
      <h2>хотите узнать про свой знак зодиака? Легко!</h2>
      <form>
        <div>
          <label htmlFor="lifeTime" for="bday">Введите дату вашего рождения:</label>
          <input type="date" id="bday" name="bday" value={inpute} onChange={(event) => setInpute(event.target.value)} />
          <button onClick={bek}>ТЫК!</button>
        </div>
      </form>
      <button onClick={() => window.location.reload()}>заново</button>

      <a href="https://github.com/OsipR"> Vladimir Osip</a>
    </div>
  )

};
export default Gor;