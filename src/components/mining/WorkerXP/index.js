import React, { useState } from 'react';
import styles from './worker.module.scss';
import ProgressBar from '../../shared/progressbar';

export default function WorkerXP() {
  const [progress, setProgress] = useState(255);
  const [progresstoal, setProgressTotal] = useState(500);

  return (
    <div className={styles.container}>
      <div className="flex">
        <div className="w-3/12"></div>
        <ProgressBar progress={progress} progresstoal={progresstoal} />
      </div>
      <p className={styles.title}>STATS</p>
      <div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <p>STATS</p>
            <p>2</p>
          </div>
          <div className={styles.content2}>
            <p>STATS</p>
            <p>2</p>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <p>STATS</p>
            <p>5</p>
          </div>
          <div className={styles.content2}>
            <p>STATS</p>
            <p>5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
