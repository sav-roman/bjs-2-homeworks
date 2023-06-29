class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, func) {
    if (!time || !func) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if(this.alarmCollection.includes(time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: func,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(function(value) {
      if(value.time != time) {
        return value;
      }
    });
  }

  getCurrentFormattedTime() {
    let cTime = new Date();
    return cTime.toLocaleTimeString().slice(0, 5);
  }

  start() {
    if(this.intervalId) {
      console.log("интервал уже создан");
      return -1;
    }

    if(this.alarmCollection.length == 0) {
      console.log("нет звонков");
      return -1;
    }
      
    function checkTime() {
      let thow = this;
      this.alarmCollection.forEach(function(vol) {
        if(vol.time == thow.getCurrentFormattedTime() && vol.canCall == true) {
          vol.canCall = false;
          vol.callback();
        }
      });
    }

    const bindedCheckTime = checkTime.bind(this);
    this.intervalId = setInterval(bindedCheckTime, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(function(vol) {
      vol.canCall = true;
    });   
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

//let aClock1 = new AlarmClock;
//aClock1.addClock("02:04", () => console.log('привет'));
//aClock1.start();

//aClock1.start();


//aClock1.alarmCollection.push('16:45');

// console.log(aClock1.alarmCollection);

//aClock1.addClock('16:45', 12);

//console.log(aClock1.alarmCollection[0]);

//console.log(aClock1.getCurrentFormattedTime());

//aClock1.intervalId = "sfsafs";
//console.log(aClock1.intervalId);
//aClock1.start();