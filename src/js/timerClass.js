import refs from './refs.js';
const { daysRest, hoursRest, minsRest, secsRest } = refs;

export default class CountdownTimer {
  constructor(targetDate) {
    this.targetDate = targetDate.getTime();
    this.intervalId = null;
    this.time = 0;
  }
  start() {
    this.intervalId = setInterval(() => {
      let currentDate = Date.now();
      this.time = this.targetDate - currentDate;
        
      this.insertData(daysRest, this.getDaysCount(this.time));
      this.insertData(hoursRest, this.getHoursCount(this.time));
      this.insertData(minsRest, this.getMinsCount(this.time));
      this.insertData(secsRest, this.getSecsCount(this.time));
    }, 1000);
  }
    finish() {
      clearInterval(this.intervalId)
  }
  getDaysCount(deltaTime) {
    return this.padValue(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 2, '0');
  }
  getHoursCount(deltaTime) {
    return this.padValue(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      '0',
    );
  }
  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol);
  }
  getMinsCount(deltaTime) {
    return this.padValue(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)), 2, '0');
  }
  getSecsCount(deltaTime) {
    return this.padValue(Math.floor((deltaTime % (1000 * 60)) / 1000), 2, '0');
  }

  insertData(place, value) {
    return (place.textContent = value);
  }
}