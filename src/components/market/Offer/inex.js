import React from 'react';
import CancelButton from '../../shared/button/CancelButton';
import ConfirmButton from '../../shared/button/ConfirmButton';

import styles from './offer.module.scss';

export default function Offer(props) {
  const { onResponse, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      <ConfirmButton
        onClick={() => {
          onResponse('buy');
        }}
      >
        BUY
      </ConfirmButton>
      <CancelButton
        onClick={() => {
          onResponse('sell');
        }}
      >
        SELL
      </CancelButton>
    </div>
  );
}
