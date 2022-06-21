import React from 'react';
import styles from './toolselection.module.scss';

export default function ToolSelection(props) {
  const { tool, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      {tool && <img src={tool} alt="tool" />}
    </div>
  );
}
