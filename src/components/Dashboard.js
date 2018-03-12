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
            amount: 0,
            expenses: []
        };
    }

    componentWillMount() {
        if (localStorage.getItem('expenses') != null) {
            this.setState({
                expenses: JSON.parse(localStorage.getItem('expenses'))
            });
        } else {
            console.log('no expenses in local storage');
        }
    }

    _addExpense = () => {
        const { date, category, description, amount, expenses } = this.state;
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
            expenses: JSON.parse(localStorage.getItem('expenses'))
        });
    }

    _handleDateChange = (e) => {
        this.setState({date: e.target.value});
    }
    _handleCategoryChange = (e) => {
        this.setState({category: e.target.value});
    }
    _handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    }
    _handleAmountChange = (e) => {
        this.setState({amount: e.target.value});
    }

    render() {
        const { expenses } = this.state;
        return (
            <div>
                <div style={{paddingTop:40,paddingBottom:40}}>
                    <TextField name="dateCreated" ref="dateCreated" type="date" required
                                onChange={this._handleDateChange} />
                    <select name="category" style={{margin:20}}
                            onChange={this._handleCategoryChange}>
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
                                onChange={this._handleDescriptionChange}/>
                    <TextField name="amount" type="number" hintText="0.00" min="0" max="99999" step="0.01" required 
                                onChange={this._handleAmountChange}/>
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
            </div>
        );
    }
}
