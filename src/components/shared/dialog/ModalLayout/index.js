import React from 'react';
import CloseButton from '../../button/CloseButton';
import { Context } from '../../../../Context';
import styles from './modallayout.module.scss';

export default function ModalLayout(props) {
  const { title, children } = props;
  const [modal, setModal] = React.useContext(Context);

  return (
    <div className={styles.contain}>
      <p className={styles.title}>{title}</p>
      <CloseButton onClick={() => setModal('')} />
      {children}
    </div>
  );
}
