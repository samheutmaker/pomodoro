import storage from './../util/storage'
import serializePromises from './../util/serializePromises'

export function initialState() {
  return {
    pomodoroList: [],
    activePomodoroIndex: null
  };
}

export function loadInitialState() {
  storage.loadState()
    .then(state => this.setStateAsync(state));
}

/************************************************************
Pomodoro Actions
*************************************************************/

export function pomodoroState(title) {
  return {
    title: title,
    complete: false,
    currentRoundIndex: 0,
    resolve: null,
    isExpanded: false,
    rounds: [
      workState(),
      breakState(),
      workState(),
      breakState(),
      workState(),
      breakState(),
      workState(),
      longBreakState()
    ]
  };
}

export function createNewPomodoro(title) {
  let pomodoroList = this.state.pomodoroList;
  pomodoroList.push(pomodoroState(title));
  return this.setStateAsync({
    pomodoroList
  });
}

export function setPomodoro(pomodoro) {
  let pomodoroIndex = this.state.pomodoroList.indexOf(pomodoro);
  let pomodoroList = this.state.pomodoroList;
  pomodoroList[pomodoroIndex] = pomodoro;
  return this.setStateAsync({
    pomodoroList
  });
}

export function toggleExpandPomodoro(index){
   let pomodoroList = this.state.pomodoroList;
   let pomodoro = pomodoroList[index];
   pomodoro.isExpanded = !pomodoro.isExpanded;
   return setPomodoro.call(this, pomodoro);
}

export function startPomodoro(index) {
  let pomodoroList = this.state.pomodoroList;
  let pomodoro = pomodoroList[index];
  if (pomodoro.resolve) {
    startTimer.call(this, pomodoro, pomodoro.currentRoundIndex);
  } else {
    pomodoro.resolve = serializePromises(pomodoro.rounds.map((round, index) => () => startTimer.call(this, pomodoro, index).then(() => {
      if(pomodoro.currentRoundIndex === 7) {
        pomodoro.complete = true;
      } else {
        pomodoro.currentRoundIndex++;
      }
      return setPomodoro.call(this, pomodoro);
    })));
  }
  pomodoroList[index] = pomodoro;
  return this.setStateAsync({
    pomodoroList,
    activePomodoroIndex: index
  });
}

export function stopPomodoro(index) {
  let pomodoroList = this.state.pomodoroList;
  let pomodoro = pomodoroList[index];
  stopTimer.call(this, pomodoro, pomodoro.currentRoundIndex);
  return setPomodoro.call(this, pomodoro);
}


/************************************************************
Pomodoro Timer Actions
*************************************************************/

export function timerState(maxSeconds) {
  return {
    maxSeconds: maxSeconds,
    elapsedSeconds: 0,
    complete: false,
    interval: null,
    resolve: null
  }
}

export function workState() {
  return Object.assign({}, {
    type: 'Work'
  }, timerState(25));
}

export function breakState() {
  return Object.assign({}, {
    type: 'Break'
  }, timerState(5));
}

export function longBreakState() {
  return Object.assign({}, {
    type: 'Long Break'
  }, timerState(25));
}

export function startTimer(pomodoro, index) {
  let timer = pomodoro.rounds[index];

  return new Promise((resolve, reject) => {
    if(!timer.resolve) timer.resolve = resolve;

    timer.interval = setInterval(() => {
      timer.elapsedSeconds += 1;
      pomodoro.timer = timer;
      setPomodoro.call(this, pomodoro);
      if(timer.elapsedSeconds >= timer.maxSeconds) {
        console.log(timer.resolve);
        timer.resolve();
        stopTimer.call(this, pomodoro, index);
      }
    }, 1000)
  });
}

export function stopTimer(pomodoro, index) {
  let timer = pomodoro.rounds[index];
  clearInterval(timer.interval);
  timer.interval = null;
  pomodoro.timer = timer;
  return setPomodoro.call(this, pomodoro);
}







