import React, { useState } from 'react';
import styles from './description.module.scss';
import gold from '../../../../../assets/image/market/gold.png';
import swap from '../../../../../assets/image/market/swap.png';

export default function Description(props) {
  const { image } = props;

  const [resourcequantity, setResource] = useState(99999999);
  const [goldquantity, setGold] = useState(99999999);

  return (
    <div className={styles.container}>
      <div className={styles.descriptionTop}>
        <div className={styles.resource}>
          <div className={styles.resourceimage}>
            <img src={image} alt="resource" />
          </div>
          <p>9999999</p>
        </div>
        <div className={styles.ratediv}>
          <div className={styles.rate}>
            99999999 <span>ORE = </span> 1 <span>GOLD</span>
          </div>
        </div>
        <div className={styles.resource}>
          <div className={styles.resourceimage}>
            <img src={gold} alt="gold" />
          </div>
          <p>9999999</p>
        </div>
      </div>
      <div className={styles.descriptionBottom}>
        <div className={styles.resource}>
          <div className={styles.resourceimage}>
            <img src={image} alt="resource" />
          </div>
          <input
            type="number"
            value={resourcequantity}
            onChange={(e) => setResource(e.target.value)}
          />
        </div>
        <div className={styles.exchange}>
          <img src={swap} alt="swap" />
          <div className={styles.swap}>SWAP</div>
        </div>
        <div className={styles.resource}>
          <div className={styles.resourceimage}>
            <img src={gold} alt="resource" />
          </div>
          <input
            type="number"
            value={goldquantity}
            onChange={(e) => setGold(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
