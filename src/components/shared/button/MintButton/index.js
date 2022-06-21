import React from 'react';
import styles from './mintbutton.module.scss';

export default function MintButton(props) {
  return (
    <div className={styles.mintbuton} {...props}>
      MINT ME!
    </div>
  );
}
