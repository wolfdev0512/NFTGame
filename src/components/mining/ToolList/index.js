import React from 'react';
import styles from './toollist.module.scss';
import ToolSelection from '../ToolSelection';

export default function ToolList(props) {
  const { tool, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
      <ToolSelection />
    </div>
  );
}
