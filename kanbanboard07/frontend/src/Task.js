import React, { useState } from 'react'
import styles from './assets/css/Task.css'

const TaskList = ({name, done}) => {
    // console.log(name, done + "task") 
    const [stateDone, setStateDone] = useState(done);

    // const onCheckProv = function(e) {
    //   console.log(e.target.checked)  
    //   setCheckProv(e.target.checked);
    // };


  return (
    <li className={styles.TaskList__Task}>
         <input 
              type='checkbox' 
              checked={done === 'Y'}
              onChange={e => setStateDone(!stateDone)}/>
              
            {name}
         <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
    )
  }

export default TaskList