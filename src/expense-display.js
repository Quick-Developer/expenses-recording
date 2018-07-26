import React, { Component } from 'react';
import Expense from './expense'
import { Paper, Typography, TextField } from '@material-ui/core'

class ExpenseDisplay extends Component {

    renderExpenses() {
        // return this.props.expenses.map((expense, index) => <Expense key={index} {...expense} />); 
        return this.props.expenses.map((expense, index) =>
            <li>
                <Expense
                    removeButten={this.props.removeExpense(index)}
                    editButten={this.props.editExpense(index)}
                    key={index} {...expense}>
                </Expense>
            </li> );
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderExpenses()}
                </ul>
            </div>

        );
    }
}

export default ExpenseDisplay;