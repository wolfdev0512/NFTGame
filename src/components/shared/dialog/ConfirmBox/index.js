import React from 'react';
import ConfirmButton from '../../button/ConfirmButton';
import CancelButton from '../../button/CancelButton';
import styles from './confirmbox.module.scss';

export default function ConfirmBox(props) {
  const { visible, onClose, action, children, ...rest } = props;
  return (
    <>
      {visible && (
        <div className={styles.container}>
          {children}
          <div className="flex justify-center w-full mb-10">
            <ConfirmButton
              onClick={() => {
                onClose(), action();
              }}
            >
              DO IT!
            </ConfirmButton>
            <CancelButton onClick={onClose}>CANCEL</CancelButton>
          </div>
        </div>
      )}
    </>
  );
}
