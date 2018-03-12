import React, { Component } from 'react';
import './ExpenseTracker.css';
import 'bootstrap/dist/css/bootstrap.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dashboard from './components/Dashboard';

class ExpenseTracker extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <h1>
            Expense Tracker
          </h1>
          <Dashboard />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ExpenseTracker;
