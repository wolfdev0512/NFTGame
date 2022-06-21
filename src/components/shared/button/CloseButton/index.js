import React from 'react';
import styles from './closebutton.module.scss';

export default function CloseButton(props) {
  return <div className={styles.contain} {...props}></div>;
}
