import React from 'react';
import styles from './firstbackground.module.scss';
import b1 from '../../../../assets/image/background/b1-1.png';
import b2 from '../../../../assets/image/background/b1-2.png';
import b3 from '../../../../assets/image/background/b1-3.png';
import b4 from '../../../../assets/image/background/b1-4.png';

export default function FirstBackground(props) {
  const { pad, children } = props;
  return (
    <div className={`${styles.container} ${pad ? 'p-4' : ''}`}>
      <div className="absolute left-0 top-0">
        <img src={b1} alt="b1" />
      </div>
      <div className="absolute right-0 top-0">
        <img src={b2} alt="b2" />
      </div>
      <div className="absolute right-0 bottom-0">
        <img src={b3} alt="b3" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src={b4} alt="b4" />
      </div>
      {children}
    </div>
  );
}
