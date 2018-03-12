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
            amount: 0
        };
    }

    render() {
        return (
            <div>
                <form>
                    <TextField name="dateCreated" ref="dateCreated" type="date" required />
                    <select name="category" style={{margin:20}}>
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
                    <TextField name="description" ref="description" type="text" hintText="Description" required />
                    <TextField name="amount" type="number" hintText="0.00" min="0" max="99999" step="0.01" required />
                    <RaisedButton 
                        style={{margin:12}} 
                        label="Add Expense" 
                        primary={true}
                        type="submit" />
                </form>
                <BootstrapTable 
                    striped hover condensed
                    keyField='id' 
                    columns={columns} 
                    filter={filterFactory()} />
            </div>
        );
    }
}
