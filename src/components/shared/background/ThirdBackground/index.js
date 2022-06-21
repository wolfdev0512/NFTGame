import React from 'react';
import styles from './thirdbackground.module.scss';
import b1 from '../../../../assets/image/background/b2-1.png';
import b2 from '../../../../assets/image/background/b2-2.png';
import b3 from '../../../../assets/image/background/b2-3.png';
import b4 from '../../../../assets/image/background/b2-4.png';

export default function ThirdBackground(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div className="absolute left-0 top-0 z-10">
        <img src={b1} alt="b1" />
      </div>
      <div className="absolute right-0 top-0 z-10">
        <img src={b2} alt="b2" />
      </div>
      <div className="absolute right-0 bottom-0 z-10">
        <img src={b3} alt="b3" />
      </div>
      <div className="absolute left-0 bottom-0 z-10">
        <img src={b4} alt="b4" />
      </div>
      {children}
    </div>
  );
}
