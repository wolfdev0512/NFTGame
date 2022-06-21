import React from 'react';
import styles from './cancelbutton.module.scss';

export default function CancelButton(props) {
  const { children, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
