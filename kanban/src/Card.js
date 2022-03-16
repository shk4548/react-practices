import React from 'react'
import TaskList from './TaskList'
import styles from './assets/css/Card.css'

const CardList = ({titles, description, tasks}) => {

  //console.log(titles, cards + "Card");

  return (
    <div className={styles.Card}>
      <div className={styles.Card__Title }>{titles}</div>
      <div>{description}</div>
        <ul>
        {tasks.map((task => <TaskList
                                name = {task.name}
                                done = {task.done}
                                key = {task.no} /> ))}
        </ul>
    </div>
  )
}

export default CardList