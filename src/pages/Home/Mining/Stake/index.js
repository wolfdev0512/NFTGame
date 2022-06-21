import React, { useState } from 'react';
import Tool from '../../../../components/mining/Tool';
import styles from './stake.module.scss';
import GatherButton from '../../../../components/shared/button/GatherButton';
import SelectionInfo from './SelectionInfo';
import StakeTool from './StakeTool';

export default function Stake(props) {
  const [selectionInfo, setSelectionInfo] = useState(true);
  const [tools, setTools] = useState([null, null, null]);
  const [selectedTool, setSelectedTool] = useState(100);
  const onSelectTool = (tool) => {
    setSelectionInfo(true);
    let newTools = tools;
    newTools[selectedTool] = tool;
    setTools(newTools);
  };
  return (
    <div className={styles.tabright}>
      <div className={styles.stats}>
        <p>SELECTION INFO</p>
      </div>

      {selectionInfo ? (
        <SelectionInfo />
      ) : (
        <StakeTool onSelectTool={onSelectTool} />
      )}
      <div className="flex justify-around">
        {tools.map((item, i) => (
          <Tool
            key={i}
            tool={item}
            onClick={() => {
              setSelectionInfo(false), setSelectedTool(i);
            }}
          />
        ))}
      </div>
      <GatherButton>STAKE</GatherButton>
      <div></div>
    </div>
  );
}
