import React, { Component } from 'react';
import ExpenseForm from './expense-form';
import './index.css';
import 'font-awesome/css/font-awesome.min.css';

class Expense extends Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({ toggle: !this.state.toggle });
    }
    editExpense = (expense) => {
        this.props.editButten(expense);
        this.toggleEdit();
    }

    render() {
        return (
            <div>
                ${this.props.amt}, {this.props.cat}, {this.props.descr} - {" "}
                <button type="button" onClick={this.props.removeButten}> <i className="icons" className="fa fa-trash-o" ></i></button>
                <button type="button" onClick={this.toggleEdit}> <i className="fa fa-pencil-square-o" ></i> </button>
                <div className={!this.state.toggle ? 'hide' : null} >
                    <ExpenseForm buttonContent="Save Edit" keyid="edit"
                        editButten={this.editExpense} />
                </div>
            </div>
        );
    }
}

export default Expense;