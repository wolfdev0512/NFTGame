import React from 'react';
import Mining from './Mining';
import Market from './Market';
import Castle from './Castle';
import styles from './home.module.scss';
import mining from '../../assets/image/home/MinesHover.png';
import river from '../../assets/image/home/RiverHover.png';
import market from '../../assets/image/home/Markethover.png';
import castle from '../../assets/image/home/CastleHover.png';
import { Context } from '../../Context';

export default function Home() {
  const [modal, setModal] = React.useContext(Context);

  return (
    <div className={styles.contain}>
      <div className={styles.mineshover}>
        <img src={mining} alt="minehover" onClick={() => setModal('mining')} />
      </div>
      <div
        className={styles.riverhover}
        onClick={() => setModal('mining')}
      ></div>
      <img src={river} alt="riverhover" className={styles.riverhoverimg} />
      <div className={styles.markethover} onClick={() => setModal('market')}>
        <img src={market} alt="markethover" />
      </div>
      <div className={styles.castlehover} onClick={() => setModal('castle')}>
        <img src={castle} alt="castlehover" />
      </div>
      {modal === 'mining' && <Mining />}
      {modal === 'market' && <Market />}
      {modal === 'castle' && <Castle />}
    </div>
  );
}
