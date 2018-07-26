import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, TextField } from '@material-ui/core'

class SingleInput extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <TextField
                        name='title'
                        type={this.props.inputType}
                        label={this.props.title}
                        placeholder={this.props.placeholder}
                        value={this.props.content}
                        onChange={this.props.controlFunc}
                        id={this.props.id}
                        margin='normal'
                    />
                </form>

                {/* <label>{this.props.title}</label>
                <input type={this.props.inputType}
                    placeholder={this.props.placeholder}
                    onChange={this.props.controlFunc}
                    value={this.props.content}
                    id={this.props.id} /> */}
            </div>
        );
    }
}

export default SingleInput;