import React, { Component } from 'react';
import * as actions from './actions/actions';
import actionBinder from './util/actionBinder'
import PropTypes from 'prop-types'
import './../scss/App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = actions.initialState();
  }
  getChildContext(){
    return {
      actions: actionBinder([actions], this)
    }
  }
  setStateAsync(newState){
    return new Promise((resolve, reject) => {
      this.setState(newState, () => resolve());
    });
  }
  render() {
    return (
      <div className="App">
        No
      </div>
    );
  }
}

App.childContextTypes = {
  actions: PropTypes.object.isRequired
};

export default App;
