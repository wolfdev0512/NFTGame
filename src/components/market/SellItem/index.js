import React from 'react';
import styles from './sellitem.module.scss';

export default function SellItem(props) {
  const { image, number, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {image ? (
        <>
          <img src={image} alt="item" />
          <div className={styles.number}>x{number}</div>
        </>
      ) : (
        <div className={styles.empty}></div>
      )}
    </div>
  );
}
