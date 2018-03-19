import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { formatElapsedTime } from './../models/Timer'

class ActivePomodoro extends Component {
  render() {
    let p = this.props.pomodoroList[this.props.activePomodoroIndex];
    if(!p) return <div/>;
    let timer = p.rounds[p.currentRoundIndex];
    return (
      <div className="ActivePomodoro">
        <div className="Type">
        </div>
        <div className={`ActiveTimer  ${timer.type}`}>
          {formatElapsedTime(timer)}
        </div>
      </div>
    );
  }
}

ActivePomodoro.childContextTypes = {
  actions: PropTypes.object.isRequired
};

ActivePomodoro.propTypes = {
  pomodoroList: PropTypes.array.isRequired,
  activePomodoroIndex: PropTypes.number,
};

export default ActivePomodoro;
