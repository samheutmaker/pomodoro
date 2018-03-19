import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PomodoroListItem from './PomodoroListItem'

class PomodoroList extends Component {
  renderCreatePomodoro(){
    return (
      <div className="PomodoroListHeader" >
        <span onClick={() => this.context.actions.createNewPomodoro('Title')}>+ New Pomodoro</span>
      </div>
    );
  }
  renderList(){
    return this.props.pomodoroList.map((pomodoro, index) => <PomodoroListItem pomodoro={pomodoro} 
                                                                              index={index}
                                                                              key={index} /> )
  }
  render() {
    return (
      <div className="PomodoroList">
        {this.renderCreatePomodoro()}
        {this.renderList()}
      </div>
    );
  }
}

PomodoroList.propTypes = {
  pomodoroList: PropTypes.array.isRequired
}

PomodoroList.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default PomodoroList;
