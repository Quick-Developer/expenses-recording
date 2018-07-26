import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import ExpenseDisplay from './expense-display';
import ExpenseSort from './expense-sort';
import 'typeface-roboto'
import { Paper, Typography, TextField } from '@material-ui/core'
import './App.css';



class App extends Component {
  addExpense(expense) {
    this.setState({ expenses: this.state.expenses.concat(expense) });
  }
  removeExpense = (index) => {
    return ((e) => {
      let array = [...this.state.expenses];
      array.splice(index, 1);
      this.setState({ expenses: array });
    });
  }
  editExpense = (index) => {
    return ((expense) => {
      let array = [...this.state.expenses];
      array.splice(index, 1, expense);
      this.setState({ expenses: array });
    });
  }
  sortExpensesByHighest = () => {
    let array = [...this.state.expenses];
    array = array.sort((a, b) => { return (a.amt < b.amt) });
    this.setState({ expenses: array });
  }
  sortExpensesByLowest = () => {
    let array = [...this.state.expenses];
    array = array.sort((a, b) => { return (a.amt > b.amt) });
    this.setState({ expenses: array });
  }

  constructor(props) {
    super(props);
    this.state = { expenses: [] };
    this.addExpense = this.addExpense.bind(this);
    this.editExpense = this.editExpense.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Typography variant='display1' align='center' gutterBottom>
          My list of expenses
      </Typography>
        <ExpenseForm addExpense={this.addExpense} buttonContent="Add Expense" keyid="add" />
        <Paper>
        <ExpenseDisplay expenses={this.state.expenses} removeExpense={this.removeExpense} editExpense={this.editExpense} />
        </Paper>
        <ExpenseSort sortExpensesByHighest={this.sortExpensesByHighest} sortExpensesByLowest={this.sortExpensesByLowest} />
        {/* sortExpensesByHighest={this.sortExpensesByHighest} sortExpensesByLowest={this.sortExpensesByLowest} */}

      </div>
    );
  }
}

export default App;
