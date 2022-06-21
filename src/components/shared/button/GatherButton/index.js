import React from 'react';
import styles from './gather.module.scss';

export default function GatherButton(props) {
  const { children, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {children}
    </div>
  );
}
