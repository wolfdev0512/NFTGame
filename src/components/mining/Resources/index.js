import React from 'react';
import styles from './resources.module.scss';
import Tool from '../../../components/mining/Tool';
import IconCrops2 from '../../../assets/image/mining/Icon-Crops2.png';

export default function Resources() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>RESOURCES</p>
      <div className={styles.content}>
        <img src={IconCrops2} alt="icon" />
        <p>123456789</p>
      </div>
      <p className={styles.title}>BOOSTS</p>
      <div className="flex justify-around">
        <Tool toolnumber={1} />
        <Tool toolnumber={0} />
        <Tool toolnumber={0} />
      </div>
    </div>
  );
}
