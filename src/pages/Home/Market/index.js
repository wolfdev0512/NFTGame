import React, { useState } from 'react';
import ModalLayout from '../../../components/shared/dialog/ModalLayout';
import trademedia1 from '../../../assets/image/market/trademedia1.png';
import trademedia2 from '../../../assets/image/market/trademedia2.png';
import styles from './market.module.scss';
import Resources from './Resources';
import Tools from './Tools';

export default function Market() {
  const [market, setMarket] = useState('selection');
  return (
    <ModalLayout title="TRADE SELECTION">
      {market == 'selection' && (
        <div className={styles.container}>
          <div className={styles.resources}>
            <p className={styles.title}>RESOURCES</p>
            <img src={trademedia1} alt="trade-media" />
            <p className={styles.content}>
              Trade your hard earned resources for precious gold
            </p>
            <p className={styles.content}>
              But remember you own 20% to the king each trade
            </p>
            <div
              className={styles.trade}
              onClick={() => setMarket('resources')}
            >
              TRADE
            </div>
          </div>
          <div className={styles.tools}>
            <p className={styles.title}>TOOLS</p>
            <img src={trademedia2} alt="trade-media" />
            <p className={styles.content}>
              Got plenty of tools you don’t need anymore? NP, sell em to others!
            </p>
            <p className={styles.content}>
              But remember you own 20% to the King each trade
            </p>
            <div className={styles.trade} onClick={() => setMarket('tools')}>
              TRADE
            </div>
          </div>
        </div>
      )}
      {market == 'resources' && <Resources />}
      {market == 'tools' && <Tools />}
    </ModalLayout>
  );
}
