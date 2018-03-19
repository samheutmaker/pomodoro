import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { getActiveTimer } from './../models/Pomodoro'

class PomodoroListItem extends Component {
  renderRounds(p){
    return p.rounds.map((round, i) => {
      console.log(round);
      return (
        <div className="Timer" key={i}>
          {round.formattedElapsedTime}
        </div>
      );  
    })
  }
  render() {
    let p = this.props.pomodoro;
    let i = this.props.index;
    let timer = getActiveTimer(p);
    return (
      <div className={`PomodoroListItem ${p.isExpanded ? 'Open' : 'Closed'}`}>
        <div className="Info">
          <div className="Item">{p.complete ? 'Complete' : 'Incomplete'}</div>
          <div className={`Item Hover ${timer.interval ? 'Red' : 'Green'}`} 
               onClick={() => timer.interval ? this.context.actions.stopPomodoro(i) : this.context.actions.startPomodoro(i)}>
            {timer.interval ? 'Stop' : 'Start'}
          </div>
          <div className="Item Hover" onClick={() => this.context.actions.toggleExpandPomodoro(i)}>View Tasks</div>
        </div>
        
        {this.renderRounds(p)}
      </div>
    );
  }
}

PomodoroListItem.propTypes = {
  pomodoro: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired
}

PomodoroListItem.contextTypes = {
  actions: PropTypes.object.isRequired
};

export default PomodoroListItem;
