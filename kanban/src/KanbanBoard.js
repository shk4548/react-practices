import React from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json'

const KanbanBoard = () => {
  console.log(cards);
  // cards 구분 -> filter , map

  // filter 의 예
  //const result = [0, 1, 2, 3,4].filter(e => e % 2 === 0);
  //console.log(result);

  return (
    <div className={styles.KanbanBoard}>
        <CardList title = {'ToDo'} cards={cards.filter(e => e.status === 'Todo')}/>  
        <CardList title = {'Doing'} cards={cards.filter(e => e.status === 'Doing')}/>   
        <CardList title  = {'Done'} cards={cards.filter(e => e.status === 'Done')}/>   
    </div>
  )
}

export default KanbanBoard;