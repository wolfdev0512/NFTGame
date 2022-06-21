import React from 'react';
import styles from './resource.module.scss';

export default function Resource(props) {
  const { image, name, ...rest } = props;
  return (
    <div className={styles.container} {...rest}>
      <img src={image} alt="resource" />
      <div className={styles.name}>{name}</div>
    </div>
  );
}
