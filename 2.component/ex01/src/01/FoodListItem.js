import React, { Component } from 'react'

export default class FoodListItem extends Component{
    render(){
        return (
            <ul>
                <li>{this.props.name}: {this.props.quantity}</li>
            </ul>
        );
    }
};