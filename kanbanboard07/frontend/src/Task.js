import React, { useState } from 'react'
import styles from './assets/css/Task.css'

const Task = ({name, done, callback, no}) => {
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
                onClick={() => {
                  done === 'Y' ? done = 'N' : done = 'Y';
                  callback.update(no,done);}}
                />
                
              {name}
           <a href='#' className={styles.TaskList__Task__remove}
              onClick = {() => {
                callback.delete(no)
              }}></a>
      </li>
      )
    }


export default Task