import React, { Component } from 'react';
import {
    Paper,
    Typography,
    TextField,
    Button
} from '@material-ui/core'

class ExpenseSort extends Component {
    render() {
        return (
            <div>
                <Typography variant="caption" gutterBottom align="center">
                Sort by:
                </Typography>
                {/* <label>Sort by: </label> */}
                <Button
                    type="button"
                    id={this.props.id}
                    onClick={this.props.sortExpensesByHighest}
                    color='primary'
                    variant='raised'
                > Highest
                </Button>
                <Button
                    type="button"
                    id={this.props.id}
                    onClick={this.props.sortExpensesByLowest}
                    color='primary'
                    variant='raised'
                > Lowest
                </Button>
                {/* <button type="button" onClick={this.props.sortExpensesByHighest}></button>
                <button type="button" onClick={this.props.sortExpensesByLowest}></button> */}
            </div>
        );
    }
}

export default ExpenseSort;