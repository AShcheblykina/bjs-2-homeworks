class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    const existingAlarm = this.alarmCollection.find(alarm => alarm.time === time);
    if (existingAlarm) {
      console.warn('Уже присутствует звонок на это же время');
    }

    let current = new Date();
    let hours = current.getHours();
    let minutes = current.getMinutes();
    let currentTime = `${hours}:${minutes}`;

    const newAlarm = {
      time: time,
      callback: callback,
    };

    this.alarmCollection.push(newAlarm);

    if (currentTime === time) {
      newAlarm.callback();
      newAlarm.cancall = false;
    }
  }
    removeClock(time,alarmCollection) {
     const filteredCalls =alarmCollection.filter(call => call.time !== time);
  return filteredCalls;    
    }
}
   function getCurrentFormattedTime() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
  }
function start(alarmTime, callback) {
  if (intervalId !== null) {
    console.log("Интервал уже установлен. Будильник не будет создан.");
    return;
  }

  const now = new Date();
  const timeToAlarm = new Date(alarmTime) - now;

  if (timeToAlarm > 0) {
    intervalId = setTimeout(() => {
      callback();
      intervalId = null;
    }, timeToAlarm);
  } else {
    console.log("Указанное время уже прошло.");
  }
}
