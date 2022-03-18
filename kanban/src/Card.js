import React, { useState } from "react";
import TaskList from "./TaskList";
import styles from "./assets/css/Card.css";

const Card = ({ titles, description, tasks }) => {
  //console.log(titles, cards + "Card");
  const [showDetails, setShowDetails] = useState(false);

  const onShowDeatails = function (e) {
    setShowDetails(function (e) {
      return e ? false : true;
    });
  };

  return (
    <div className={styles.Card}>
      <div
        className=
        {showDetails ? styles.Card__Title__open : styles.Card__Title}
        value={showDetails}
        onClick={onShowDeatails}
      >
        {titles}
        <br />
      </div>


      {description}


      <div>
        {showDetails ? (
          <ul>
            {tasks.map((task) => (
              <TaskList name={task.name} done={task.done} key={task.no} />
            ))}
          </ul>
        ) : null}
      </div>

    </div>
  );
};
export default Card;
