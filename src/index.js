import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpenseTracker from './ExpenseTracker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ExpenseTracker />, document.getElementById('root'));
registerServiceWorker();
