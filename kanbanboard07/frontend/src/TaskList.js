
import React from 'react';
import styles from './assets/css/TaskList.css';
import Task from './Task';


const TaskList = ({tasks, no , callback}) => {
  

  return (
    <div className={styles.TaskList}>
        <ul>
            {tasks.map(task => <Task
                                    key={task.no}
                                    name={task.name}
                                    done={task.done}
                                    /> )}

       
            <input 
              type={'text'} 
              className={styles.TaskList__add_task} 
              placeholder={'태스크 추가'}
              onKeyPress= {e => {
                  if(e.key === 'Enter') {
                    console.log(`call notifyAddTask(${e.target.value})`)


                    try {

                      if(e.target.value === ''){
                        throw new Error(`${e.target.name}이 비었움`)
                      }
                      const newTask = {
                        name : e.target.value,
                        done : 'N',
                        card_no : no
                      }

                      callback(newTask);
                      e.target.value = '';
                    } catch(err) {
                      console.log(err.message);
                    }
                  }
                }
            }/>
        </ul>
    </div>     
  );
}

export default TaskList