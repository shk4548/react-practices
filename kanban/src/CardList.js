import React from 'react'
import styles from './assets/css/CardList.css'
import Card from './Card'


const CardList = ({title,cards}) => {  // property 공법 // cards는 map사용
  console.log(title,cards + "아아")

  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <div>
        {cards.map((card) => <Card 
                                titles = {card.title}
                                description = {card.description}
        />)}
        </div>


    </div>

  )
}

export default CardList;