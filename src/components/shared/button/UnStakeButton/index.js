import React from 'react';
import styles from './unstakebutton.module.scss';

export default function UnStakeButton(props) {
  const { children, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
