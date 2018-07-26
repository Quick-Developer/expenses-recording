import React, { Component } from 'react';
import SingleInput from './single-input';
import {
    Paper,
    Typography,
    TextField,
    Button
} from '@material-ui/core'

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        this.changeExpense = this.changeExpense.bind(this);
        this.onBtnClick = this.onBtnClick.bind(this);

        this.state = { amt: 0, cat: "", descr: "" };
    }
    render() {
        return (
            <div>
                <SingleInput type="number" id="amt" content={this.state.amt} placeholder="$" controlFunc={this.changeExpense} />
                <SingleInput type="text" id="cat" content={this.state.cat} placeholder="Category" controlFunc={this.changeExpense} />
                <SingleInput type="text" id="descr" content={this.state.descr} placeholder="Description" controlFunc={this.changeExpense} />
                <Button
                    type="button"
                    keyid={this.props.keyid}
                    onClick={this.onBtnClick}
                    color='primary'
                    variant='raised'
                > {this.props.buttonContent}
                </Button>
                {/* <button type="button" id={this.props.id} onClick={this.onBtnClick}>{this.props.buttonContent}</button> */}
            </div>
        );
    }
    changeExpense(e) {
        this.setState({ [e.target.id]: e.target.value });
        //e.target.id <-- the element id (which matches our state)
        //e.target.value <-- the element value
        //[e.target.id] <-- is the way to define a dynamic var name
    }
    onBtnClick(e) {
        e.preventDefault();
      
        if (this.props.keyid === "add") {
            this.props.addExpense(this.state);
        }
        else if (this.props.keyid === "edit") {
            this.props.editButten(this.state);
        }
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
        });
    }
}

export default ExpenseForm;