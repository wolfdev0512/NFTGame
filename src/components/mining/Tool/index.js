import React from 'react';
import styles from './tool.module.scss';
import plus from '../../../assets/image/mining/icon-Plus.png';
import questioncap from '../../../assets/image/mining/icon-Questionmark.png';
import toolcap from '../../../assets/image/mining/icon-Tool.png';
export default function Tool(props) {
  const { tool, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      <div className={styles.tool}>
        {tool ? <img src={tool} alt="tool" /> : <img src={plus} alt="plus" />}
      </div>
      <img className={styles.cap} src={tool ? toolcap : questioncap} />
    </div>
  );
}
