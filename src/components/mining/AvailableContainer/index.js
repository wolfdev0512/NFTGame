import React, { useState } from 'react';
import styles from './availablecontainer.module.scss';
import IconCheck from '../../../assets/image/mining/IconCheck.png';
import Avatar from '../../../assets/image/mining/avatar.png';
import loggin from '../../../assets/image/mining/loggin.png';
import WorkerXP from '../WorkerXP';
import Resources from '../Resources';

export default function AvailableContainer(props) {
  const { ...rest } = props;
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.avatar}>
        <img src={Avatar} alt="avatar" />
      </div>
      <div className={styles.lazyworker}>
        <p>Lazy worker</p>
        <div className={styles.inputdiv}>123456789</div>
        <img src={loggin} alt="icon" className={styles.icon} />
      </div>
      <div className={styles.check} onClick={() => setCheck(!check)}>
        {check && <img src={IconCheck} alt="check" />}
      </div>
    </div>
  );
}
