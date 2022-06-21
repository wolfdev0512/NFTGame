import React from 'react';
import styles from './gatherdialog.module.scss';
import ConfirmBox from '../../shared/dialog/ConfirmBox';
import IconCrops2 from '../../../assets/image/mining/Icon-Crops2.png';
import IconEqual from '../../../assets/image/mining/icon-equal.png';

export default function GatherDialog(props) {
  const { visible, onClose, ...rest } = props;
  return (
    <ConfirmBox visible={visible} onClose={onClose} action={onClose} {...rest}>
      <div className={styles.container}>
        <p>SAFE RESOURCES GATHER</p>

        <div className={styles.subcontainer}>
          <p>YOU WILL COLLECT</p>
          <div className="flex justify-between">
            <div className={styles.collectioninfo1}>
              <img src={IconCrops2} alt="iconcrops2" />
              <p>123456789</p>
            </div>
            <p className={styles.collectioninfo2}>-20%</p>
          </div>
          <div className={styles.collectioninfo1}>
            <img src={IconEqual} alt="equal" />
            <p>98765431.2</p>
          </div>
          <div className="flex justify-between">
            <p>From:</p>
            <p>1/10 NFTS</p>
          </div>
        </div>
      </div>
    </ConfirmBox>
  );
}
