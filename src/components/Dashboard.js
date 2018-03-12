import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import { columns } from '../config/Columns';

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            category: '',
            description: '',
            amount: '',
            expenses: [],
            totalAmount: 0.00
        };
    }

    /**
     * If possible, loads up existing localStorage expenses onto component states to use for later.
     */
    componentWillMount() {
        if (localStorage.getItem('expenses') != null) {
            this.setState({
                expenses: JSON.parse(localStorage.getItem('expenses'))
            });
        }
    }

    /**
     * Sets up total amount after component has mounted.
     */
    componentDidMount() {
        this.setState({
            totalAmount: this._getTotalAmount()
        });
    }

    /**
     * Adds a new expense to localStorage.
     */
    _addExpense = () => {
        const { date, category, description, amount, expenses } = this.state;
        if (date === "" || date === null) {
            alert('Please enter a date.');
            return;
        } else if (description === "" || description === null) {
            alert('Please enter a description.');
            return;
        } else if (amount === "" || amount === "") {
            alert('Please enter an amount.');
            return;
        }
        var oldExpenses = expenses;
        const newExpense = {
            id: expenses.length + 1,
            date: date,
            category: category,
            description: description,
            amount: amount
        }
        oldExpenses.push(newExpense);
        localStorage.setItem('expenses', JSON.stringify(oldExpenses));
        this.setState({
            expenses: JSON.parse(localStorage.getItem('expenses')),
            totalAmount: this._getTotalAmount()
        });
        // reset state on input fields
        this.setState({
            date: '', category: '', description: '', amount: ''
        });
    }

    /**
     * Add expense event handlers.
     * @param e
     */
    _handleDateChange = (e) => {
        this.setState({date: e.target.value});
    }
    _handleCategoryChange = (e) => {
        this.setState({category: parseInt(e.target.value, 10)});
    }
    _handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }
    _handleAmountChange = (e) => {
        if (e.target.value !== '') {
            this.setState({amount: parseFloat(e.target.value, 10)});
        } else {
            this.setState({amount: ''});
        }
    }

    /**
     * Gets total amount of all expenses.
     */
    _getTotalAmount = () => {
        var total = 0;
        for (let i = 0; i < this.state.expenses.length; i++) {
            total += this.state.expenses[i].amount;
        }
        return total;
    }

    render() {
        const { date, category, description, amount, expenses } = this.state;
        return (
            <div>
                <div style={{paddingTop:40,paddingBottom:40}}>
                    <TextField name="dateCreated" ref="dateCreated" type="date" required
                                value={date} onChange={this._handleDateChange} />
                    <select name="category" style={{margin:20}}
                            value={category} onChange={this._handleCategoryChange}>
                        <option value={0}>Utilities</option>
                        <option value={1}>Groceries</option>
                        <option value={2}>Household</option>
                        <option value={3}>Restaurants</option>
                        <option value={4}>Clothing</option>
                        <option value={5}>Entertainment</option>
                        <option value={6}>Hobbies</option>
                        <option value={7}>Work</option>
                        <option value={8}>Insurance</option>
                        <option value={9}>Savings</option>
                        <option value={10}>Other</option>
                    </select>
                    <TextField name="description" ref="description" type="text" hintText="Description" required 
                                value={description} onChange={this._handleDescriptionChange}/>
                    <TextField name="amount" type="number" hintText="0.00" min="0" max="99999" step="0.01" required 
                                value={amount} onChange={this._handleAmountChange}/>
                    <RaisedButton 
                        style={{margin:12}} 
                        onClick={this._addExpense}
                        label="Add Expense" 
                        primary={true}
                        type="submit" />
                </div>
                <BootstrapTable 
                    striped hover
                    keyField='id' 
                    data={expenses}
                    columns={columns} 
                    filter={filterFactory()} />
                    Total Expenses:&nbsp;$<label>{this.state.totalAmount}</label>
            </div>
        );
    }
}
