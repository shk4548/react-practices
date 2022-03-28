import React, { useState } from 'react'
import styles from './assets/css/TaskList.css'
const TaskList = ({name, done}) => {
    // console.log(name, done + "task") 
    const [checkProv, setCheckProv] = useState(done);

    const onCheckProv = function(e) {
      console.log(e.target.checked)
      setCheckProv(e.target.checked);
    };


  return (
    <li className={styles.TaskList}>
         <input 
              type='checkbox' 

              checked={checkProv}

              onChange={onCheckProv}/>
            {name}
         <a href='#' className={styles.TaskList__Task__remove}></a>
    </li>
    )
  }

export default TaskList