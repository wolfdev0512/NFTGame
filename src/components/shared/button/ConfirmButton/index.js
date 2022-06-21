import React from 'react';
import styles from './confirmbutton.module.scss';

export default function ConfirmButton(props) {
  const { children, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
