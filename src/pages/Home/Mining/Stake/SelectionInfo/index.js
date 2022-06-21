import React from 'react';
import styles from './selectioninfo.module.scss';
import basespeedicon from '../../../../../assets/image/mining/Icon-Hunting.png';

export default function SelectionInfo() {
  return (
    <div className={styles.selectioncontent}>
      <div className={styles.selectiondata}>
        <div className={styles.gatherhspeed}>
          <div className={styles.inputdata2}>10/s</div>
          <p>Base gathering speed</p>
          <img src={basespeedicon} alt="basespeedicon" />
        </div>
      </div>
      <div className={styles.selectiondata}>
        <div className="w-1/2 px-6">
          <div className={styles.inputdata2}>x0.5</div>
          <p>Multipliers</p>
        </div>
        <div className="w-1/2 px-6">
          <div className={styles.inputdata2}>10/s</div>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
}
