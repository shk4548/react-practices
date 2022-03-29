import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import styles from "./assets/css/Card.css";

const Card = ({no, titles, description }) => {
  //console.log(titles, cards + "Card");

  const [tasks, setTasks] = useState([]);
  const [showDetails, setShowDetails] = useState(false);

  const onShowDeatails = function (e) {
    setShowDetails(function (e) {
      return e ? false : true;
    });
  };
  
  // read
  useEffect(async () => {
    console.log(no);
    try{
      const response = await fetch(`/api/card/${no}`  , {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });

      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
      }

      const json = await response.json(); // 비동기 함수
      
      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
      }

      setTasks(json.data);
    } catch(err){
      console.log(err);
    }

  }, []);

  // insert
  const notifyAddTask = async function(newTask){
    console.log(`post /api/card/${no}`, newTask + "카카카카카카카");
    try{
      const response = await fetch(`/api/card/${no}` , {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newTask)
      });
  
      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
      }
  
      const json = await response.json(); // 비동기 함수
      
      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
      }
      
      console.log(json.data);
      setTasks([...tasks ,json.data]);
    } catch(err){
      console.log(err);
    }
  }

  // delete
  const deleteTask = async function(taskNo){
    console.log(`post /api/task/delete/${taskNo}`, taskNo + "카카카카카카카");
    try{
      const response = await fetch(`/api/task/delete/${taskNo}` , {
        method: 'delete',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: null
      });
  
      if(!response.ok){
        throw new Error(`${response.status} ${response.statusText}`)
      }
  
      const json = await response.json(); // 비동기 함수
      
      if(json.result !== 'success'){
        throw new Error(`${json.result} ${json.message}`);
      }
      
      setTasks(tasks.filter(({no}) => {
        return (no !== taskNo)
      }));
    } catch(err){
      console.log(err);
    }}

  const updateTask = async function(){
    
  }
  return (
    <div className={styles.Card}>

      <div
        className= {showDetails ? styles.Card__Title__open : styles.Card__Title}
        onClick={onShowDeatails}
        >
        {titles}
      </div>

      {
          showDetails ? 
            <div className={styles.Card__Details}>
              {description}
              <TaskList tasks = {tasks}
                        callback = {{
                          insert : notifyAddTask,
                          delete : deleteTask}} 
                        no = {no}
                        />
            </div> :
            null
        }

    </div>
  );
};

export default Card;
