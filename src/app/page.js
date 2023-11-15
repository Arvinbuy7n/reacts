"use client"

import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "To Do",
      description: "+  Add card",
    },
    {
      id: 2,
      title: "In progress",
      description: "+  Add card",
    },
    {
      id: 3,
      title: "Stuck",
      description: "+  Add card",
    },
    {
      id: 4,
      title: "Done",
      description: "+  Add card",
    },
  ]);
  const clickHandler = () => {
    setData([
      ...data,
      {
        id: 4,
        title: "Done",
        description: "+  Add card",
      },
    ]);
  };

  return (
    <>
      <div className={styles.board}>
        <div className={styles.container} >
          {data.map((item) => {
            return <Card key={item.id} title={item.title} description={item.description} />
          })}
          <button onClick={clickHandler}>Add</button>
        </div>
      </div>
      <Name />
    </>
  );
};

export const Card = (props) => {
  return (
    <div className={styles.card} >
      <h3 className={styles.num}>{props.title}</h3>
      <p className={styles.num2}>{props.description}</p>
    </div>
  );
};

export const Name = (count) => {
  return (
    <div className={styles.core}>
      <form className={styles.repo}>
        <h2>Add task</h2>
        <p className={styles.share}>Title</p>
        <input className={styles.one}></input>
        <p className={styles.share}>Description</p>
        <textarea className={styles.onex}></textarea>
        <p className={styles.share}>Status</p>
        <select className={styles.one}>
          <option></option>
          <option>To do</option>
          <option>In progress</option>
          <option>Stuck</option>
          <option>Done</option>
        </select>
        <p className={styles.share}>Priority</p>
        <select className={styles.one}>
          <option></option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <div className={styles.data}>
          <button className={styles.too}>Add task</button>
        </div>
      </form>
    </div>
  );
};







{/* <div className={styles.card} >
      <h3 className={styles.num}>{props.title}</h3>
      <p className={styles.num2}>{props.description}</p>
      <p className={styles.num3}>{props.priority}</p>
    </div> */}
