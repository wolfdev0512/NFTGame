import React from 'react';
import buyitem from '../../../assets/image/market/buyitem.png';
import styles from './buyitem.module.scss';

export default function BuyItem(props) {
  const { image, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.buyitem}>
        <img src={image} alt="buyitem" />
      </div>
      <div className={styles.itemdes}>
        <p>Knights sword</p>
        <p>Epic</p>
        <p>15,000 Gold</p>
      </div>
    </div>
  );
}
