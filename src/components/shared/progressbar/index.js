import React, { useEffect } from 'react';
import styles from './progressbar.module.scss';

export default function ProgressBar(props) {
  const { progress, progresstoal, percentage, ...rest } = props;
  const progressbar = React.useRef();

  useEffect(() => {
    if (!!percentage) {
      progressbar.current.style.width = percentage + '% ';
    } else {
      progressbar.current.style.width = (progress * 100) / progresstoal + '%';
    }
  }, [progress]);
  return (
    <div className={styles.pregressbar} {...rest}>
      <div ref={progressbar} className={styles.progressbarBg} />
      <p>{percentage ? `${percentage} %` : `${progress}/${progresstoal}`}</p>
    </div>
  );
}
