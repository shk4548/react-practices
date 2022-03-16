import React from 'react'
import styles from './assets/css/TaskList.css'
const TaskList = ({name, done}) => {
    // console.log(name, done + "task") 
  return (
    <li className={styles.TaskList}>
         <input type='checkbox' checked={done} />
            {name}
         <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
  )
}

export default TaskList