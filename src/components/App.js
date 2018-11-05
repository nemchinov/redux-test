import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../storage/actions';

import logo from '../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    let { firstName, secondName, changeFirstName, changeSecondName } = this.props,
      changeFirst = (event) => {
        changeFirstName(event.currentTarget.value);
      },
      changeSecond = (event) => {
        changeSecondName(event.currentTarget.value);
      };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input type='text' placeholder='First Name' value={firstName} onChange={ changeFirst } />
            <input type='text' placeholder='Second Name' value={secondName} onChange={ changeSecond } />
          </div>
        </header>
      </div>
    );
  }
}

export default connect(actions.stateToProps, actions.actionsToProps)(App);
