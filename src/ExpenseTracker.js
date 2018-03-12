import React, { Component } from 'react';
import './ExpenseTracker.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ExpenseTracker extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>
            Expense Tracker
          </h1>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExpenseTracker;
