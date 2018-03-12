import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

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
                        <option value="utilities">Utilities</option>
                        <option value="groceries">Groceries</option>
                        <option value="household">Household</option>
                        <option value="restaurants">Restaurants</option>
                        <option value="clothing">Clothing</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="hobbies">Hobbies</option>
                        <option value="work">Work</option>
                        <option value="insurance">Insurance</option>
                        <option value="savings">Savings</option>
                        <option value="other">Other</option>
                    </select>
                    <TextField name="description" ref="description" type="text" hintText="Description" required />
                    <TextField name="amount" type="number" hintText="0.00" min="0" max="99999" step="0.01" required />
                    <RaisedButton 
                        style={{margin:12}} 
                        label="Add Expense" 
                        primary={true}
                        type="submit" />
                </form>
            </div>
        );
    }
}
