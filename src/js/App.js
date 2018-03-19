import React, { Component } from 'react';
import * as actions from './actions/actions';
import storage from './util/storage'
import actionBinder from './util/actionBinder'
import PropTypes from 'prop-types'
import PomodoroList from './components/PomodoroList'
import ActivePomodoro from './components/ActivePomodoro'
import './../css/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = actions.initialState();
  }
  componentDidMount(){
    actions.loadInitialState.call(this);
  }
  getChildContext(){
    return {
      actions: actionBinder([actions], this)
    }
  }
  setStateAsync(newState){
    return new Promise((resolve, reject) => {
      this.setState(newState, () => resolve());
      storage.saveState(newState);
    });
  }
  render() {
    return (
      <div className="App">
        <PomodoroList pomodoroList={this.state.pomodoroList}/>
        <ActivePomodoro activePomodoroIndex={this.state.activePomodoroIndex} 
                        pomodoroList={this.state.pomodoroList}/>
      </div>
    );
  }
}

App.childContextTypes = {
  actions: PropTypes.object.isRequired
};

export default App;
