import React from 'react'
import styles from './assets/css/Card.css'
import cards from './data.json'

const Card = () => {
  return (
    <div className={styles.Card}>
      <div>
        {cards.titles}
        {cards.description}
      </div>



    </div>
  )
}

export default Card