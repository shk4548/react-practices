import React, { Component } from 'react'

const FoodList = ({foods}) => {
    render(
        // map 사용
            <ul>
                {foods.map((food) => <FoodListItem 
                                                        name = {food.name} 
                                                        quantity={food.quantity} /> )}
            </ul>
        )
    }
export defualt FoodList;