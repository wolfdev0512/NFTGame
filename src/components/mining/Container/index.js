import React, { useEffect, useState } from 'react';
import styles from './container.module.scss';
import IconCheck from '../../../assets/image/mining/IconCheck.png';
import Avatar from '../../../assets/image/mining/avatar.png';
import loggin from '../../../assets/image/mining/loggin.png';
import WorkerXP from '../WorkerXP';
import Resources from '../Resources';
import { Visibility } from '@mui/icons-material';

export default function Container(props) {
  const { ...rest } = props;
  const [check, setCheck] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const container = React.useRef();
  const worderxp = React.useRef();
  const worderxpClick = React.useRef();
  const resource = React.useRef();
  const resourceClick = React.useRef();
  const [containerSize, setContaierSize] = useState({});

  const mouseHover = () => {
    const { bottom, left, right, top, width } =
      container.current.getBoundingClientRect();
    let size = {
      width: width,
      bottom: bottom,
      left: left,
      right: right,
      top: top,
    };
    setContaierSize(size);
  };

  useEffect(() => {
    worderxp.current.style.right =
      window.innerWidth - containerSize.left + 'px';
    worderxp.current.style.top = containerSize.top + 'px';
    resource.current.style.left = containerSize.right + 'px';
    resource.current.style.top = containerSize.top + 'px';

    worderxpClick.current.style.right =
      window.innerWidth - containerSize.left + 'px';
    worderxpClick.current.style.top = containerSize.top + 'px';
    resourceClick.current.style.left = containerSize.right + 'px';
    resourceClick.current.style.top = containerSize.top + 'px';
  }, [containerSize]);
  useEffect(() => {
    worderxpClick.current.style.visibility = isShown ? 'visible' : 'hidden';
    worderxpClick.current.style.opacity = isShown ? 1 : 0;

    resourceClick.current.style.visibility = isShown ? 'visible' : 'hidden';
    resourceClick.current.style.opacity = isShown ? 1 : 0;
  }, [isShown]);

  return (
    <div
      className={`${styles.container} ${isShown ? styles.active : ''}`}
      {...rest}
      ref={container}
      onMouseEnter={() => mouseHover()}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => setIsShown(true)}
    >
      <div className={styles.avatar}>
        <img src={Avatar} alt="avatar" />
        <div className={styles.workerxp} ref={worderxpClick}>
          <WorkerXP />
        </div>
        <div className={styles.workerxp} ref={worderxp}>
          <WorkerXP />
        </div>
      </div>
      <div className={styles.lazyworker}>
        <p>Lazy worker</p>
        <div className={styles.inputdiv}>123456789</div>
        <img src={loggin} alt="icon" className={styles.icon} />
        <div className={styles.resources} ref={resourceClick}>
          <Resources />
        </div>
        <div className={styles.resources} ref={resource}>
          <Resources />
        </div>
      </div>
      <div className={styles.check} onClick={() => setCheck(!check)}>
        {check && <img src={IconCheck} alt="check" />}
      </div>
    </div>
  );
}
