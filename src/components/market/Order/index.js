import React from 'react';
import styles from './order.module.scss';
import plus from '../../../assets/image/market/plus.png';
import buy from '../../../assets/image/market/buy.png';
import sell from '../../../assets/image/market/sell.png';

import { buyItems, sellItems } from '../../../const';

export default function Order(props) {
  const { status, marketState, itemnumber, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {!!status && itemnumber ? (
        <div className={styles.item}>
          <div className={styles.itemimage}>
            <img
              src={
                status == 'sell'
                  ? sellItems[itemnumber - 1].image
                  : buyItems[itemnumber - 1].image
              }
            />
          </div>
          <div className={styles.itemdes}>
            <p>Knights sword</p>
            <p>Epic</p>
            <p>15,000 Gold</p>
          </div>
          <img
            src={status == 'sell' ? sell : buy}
            alt="buy"
            className="absolute right-0 top-0"
          />
        </div>
      ) : (
        <div className={styles.noitem}>
          <img src={plus} className={styles.plus} />
          <div className={styles.placeholder}>Place Order</div>
        </div>
      )}
    </div>
  );
}
