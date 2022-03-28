import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card'


const CardList = ({title,cards}) => {  // property 공법 // cards는 map사용
  // console.log(title,cards + "CardList")

  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <div>
        {cards.map((card) => <Card 
                                titles = {card.title}
                                description = {card.description}
                                tasks =  {card.tasks}
                                key = {card.no}
        />)}
        </div>


    </div>
    

  )
}

export default CardList;