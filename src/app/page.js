"use client"

import styles from './page.module.css'
import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(4);

  return (
    <div className={styles.container} >
      <Counter
        count={count}
        updateCount={() => {
          setCount(count + 1)
        }}
      />
    </div>
  );
};
export const Counter = (props) => {
  return (
    <div className={styles.number} >
      <h3>{props.count}</h3>
      <button className={styles.color} onClick={props.updateCount}>Add</button>
    </div>
  );
};

