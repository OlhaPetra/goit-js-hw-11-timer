import CountdownTimer from './timerClass.js'

const timer = new CountdownTimer(new Date('Dec 31 2021'));
timer.start();



//ОБРАТНЫЙ ОТЧЕТ БЕЗ ИСПОЛЬЗОАНИЯ КЛАССА//

/* const { daysRest, hoursRest, minsRest, secsRest } = refs;

const targetDate = new Date('Dec 31, 2021').getTime();

function start() {
  setInterval(() => {
    let currentDate = Date.now();
    let time = targetDate - currentDate;

    let days = getDaysCount(time);
    let hours = getHoursCount(time);
    let mins = getMinsCount(time);
    let secs = getSecsCount(time);

    days = padValue(days, 3, '-');
    hours = padValue(hours, 2, '0');
    mins = padValue(mins, 2, '0');
    secs = padValue(secs, 2, '0');

    insertData(daysRest, days);
    insertData(hoursRest, hours);
    insertData(minsRest, mins);
    insertData(secsRest, secs);
  }, 1000);
}

start();

function insertData(place, value) {
  return (place.textContent = value);
}

function getDaysCount(deltaTime) {
  return Math.floor(deltaTime / (1000 * 60 * 60 * 24));
}

function getHoursCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getMinsCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
}

function getSecsCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60)) / 1000);
}

function padValue(value, num, symbol) {
  return String(value).padStart(num, symbol);
}
 */