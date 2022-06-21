import React, { useState } from 'react';
import FirstBackground from '../../../../components/shared/background/FirstBackground';
import SecondBackground from '../../../../components/shared/background/SecondBackground';
import ThirdBackground from '../../../../components/shared/background/ThirdBackground';
import styles from './toolsmint.module.scss';
import tool from '../../../../assets/image/castle/tool.png';
import tool1 from '../../../../assets/image/castle/tool1.png';
import tool2 from '../../../../assets/image/castle/tool2.png';
import tool3 from '../../../../assets/image/castle/tool3.png';
import tool4 from '../../../../assets/image/castle/tool4.png';
import tool5 from '../../../../assets/image/castle/tool5.png';
import tool6 from '../../../../assets/image/castle/tool6.png';
import ore from '../../../../assets/image/market/ore.png';
import fish from '../../../../assets/image/market/fish.png';
import wood from '../../../../assets/image/market/wood.png';
import hides from '../../../../assets/image/market/hides.png';
import gold from '../../../../assets/image/market/gold.png';
import corn from '../../../../assets/image/market/corn.png';
import MintButton from '../../../../components/shared/button/MintButton';
import ProgressBar from '../../../../components/shared/progressbar';

export default function ToolsMint() {
  const [tools, setTools] = useState([
    {
      image: tool1,
      name: '',
    },
    {
      image: tool2,
      name: '',
    },
    {
      image: tool3,
      name: '',
    },
    {
      image: tool4,
      name: '',
    },
    {
      image: tool5,
      name: '',
    },
    {
      image: tool6,
      name: '',
    },
  ]);

  const [sorts, setSorts] = useState([
    'stone',
    'steel',
    'crystal',
    'adamantite',
    'infernium',
    'mythic',
  ]);
  const [toolType, setToolType] = useState(0);
  const [toolSort, setToolSort] = useState(0);

  const [priceinfo, setPriceInfo] = useState([
    { image: ore, available: 123456789, price: 100 },
    { image: fish, available: 123456789, price: 100 },
    { image: corn, available: 123456789, price: 100 },
    { image: wood, available: 123456789, price: 100 },
    { image: hides, available: 123456789, price: 100 },
    { image: gold, available: 123456789, price: 100 },
  ]);

  return (
    <div className="flex justify-between">
      <div className={styles.character}>
        <ThirdBackground>
          <FirstBackground pad={true}>
            <div className={styles.toolout}>
              <SecondBackground>
                <div className={styles.toolinside}>
                  <img src={tool} />
                </div>
              </SecondBackground>
            </div>
            <div className={styles.toolname}>stone pickaxe</div>
            <div className={styles.toolselection}>
              <div className={styles.tooltype + ' grid grid-cols-6 gap-0'}>
                {tools.map((item, i) => {
                  return (
                    <div
                      className={`${styles.toolindi} ${
                        toolType == i ? styles.active : ''
                      }`}
                      key={i}
                      onClick={() => setToolType(i)}
                    >
                      <img src={item.image} />
                    </div>
                  );
                })}
              </div>
              <div className={styles.sort + ' grid grid-cols-2 gap-2'}>
                {sorts.map((item, i) => {
                  return (
                    <div
                      className={`${styles.sortindi} ${
                        toolSort == i ? styles.active : ''
                      }`}
                      key={i}
                      onClick={() => setToolSort(i)}
                    >
                      <p>{item}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </FirstBackground>
        </ThirdBackground>
      </div>
      <div className={styles.balance}>
        <FirstBackground pad>
          <div className={styles.title}>
            <p>available balance</p>
            <p>price</p>
          </div>
          <div className={styles.info}>
            {priceinfo.map((item, i) => {
              return (
                <div className="flex justify-between m-3" key={i}>
                  <div className={styles.brand}>
                    <img src={item.image} alt="item" />
                  </div>
                  <p>{item.available}</p>
                  <p>{item.price}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.des}>
            <div className={styles.progress}>
              <p>Progress:</p>
              <p>8000</p>
              <p>/</p>
              <p>10000</p>
            </div>
            <div className={styles.progressbar}>
              <ProgressBar percentage={80} />
            </div>
            <MintButton />
          </div>
        </FirstBackground>
      </div>
    </div>
  );
}
