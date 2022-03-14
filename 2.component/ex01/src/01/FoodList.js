import React, { Component } from 'react'
import FoodListItem from './FoodListItem';

export default class FoodList extends Component{
    render(){
        return (
            <ul>
                <FoodListItem name = "Egg" quantity="20" />
                <FoodListItem name = "Milk" quantity="5" />
                <FoodListItem name = "Bread" quantity="101" />
            </ul>
        );
    }
};