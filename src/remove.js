import React, { Component } from 'react';

class Remove extends Component {
    constructor(props) {
        super(props);
      
        this.onBtnClick = this.onBtnClick.bind(this);
       
        this.state = { amt: 0, cat: "", descr: "" };
    }
    render() {
        return (
            <div>                
                <button type="button" onClick={this.onBtnClick}>Remove</button>
            </div>
        );
    }
   
    onBtnClick() {
        this.props.addExpense(this.state);
        this.setState({ amt: 0, cat: '', descr: '' }, () => {
            // console.log(this.state);
        });
    }
}

export default Remove;