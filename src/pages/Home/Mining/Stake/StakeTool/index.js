import React, { useState } from 'react';
import styles from './staketool.module.scss';
import tool1 from '../../../../../assets/image/mining/tool1.png';
import tool2 from '../../../../../assets/image/mining/tool2.png';

export default function StakeTool(props) {
  const { onSelectTool } = props;
  const [tool, setTool] = useState([
    tool1,
    tool2,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  return (
    <div className={styles.selectioncontent}>
      <div className={styles.toolContaner + ' grid grid-cols-4 gap-1'}>
        {tool.map((item, i) => {
          return (
            <div key={i} className={styles.tool}>
              {<img src={item} onClick={() => onSelectTool(tool[i])} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
