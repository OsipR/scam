import { useState, useEffect } from "react";

function Gor () {

  const [inpute, setInpute] = useState("");

const minutes = 1000 * 60;
const hours = minutes * 60;
const days = hours * 24;
const years = days * 365;

const d1 = new Date(inpute);
const d2 = new Date();
const lifeTime1 = d1.getTime();
const lifeTime2 = d2.getTime();

const lifeYears = Math.floor((lifeTime2 - lifeTime1) / years);
const LifeDays = Math.floor((lifeTime2 - lifeTime1) / days);
const LifeHours = Math.floor((lifeTime2 - lifeTime1) / hours);
const LifeMinutes = Math.floor((lifeTime2 - lifeTime1) / minutes);


return (
<div>
    <h1>ГОРОСКОП</h1>
    <h2>хотите узнать свой гороскоп? Легко!</h2>
 <form>
  <div>
    <label htmlFor="lifeTime" for="bday">Введите дату вашего рождения:</label>
    <input type="date" id="bday" name="bday" value={inpute} onChange={(event) => setInpute(event.target.value)}/>
    <div>Вы прожили уже: {lifeYears} лет(года), {LifeDays} дней, {LifeHours} часов, {LifeMinutes} минут</div>
  </div>
 </form>


 <a href = "https://github.com/OsipR"> Vladimir Osip</a>
</div>
)

};
export default Gor;