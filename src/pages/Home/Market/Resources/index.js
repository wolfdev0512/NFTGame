import React, { useState } from 'react';
import styles from './resources.module.scss';
import ore from '../../../../assets/image/market/ore.png';
import fish from '../../../../assets/image/market/fish.png';
import corn from '../../../../assets/image/market/corn.png';
import wood from '../../../../assets/image/market/wood.png';
import hides from '../../../../assets/image/market/hides.png';
import Resource from './Resource';
import Description from './Description';

export default function Resources() {
  const [resources, setResources] = useState([
    { image: ore, name: 'ORE' },
    { image: fish, name: 'FISH' },
    { image: corn, name: 'CORN' },
    { image: wood, name: 'WOOD' },
    { image: hides, name: 'HIDES' },
  ]);

  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.resources + ' grid grid-cols-5 gap-3'}>
        {resources.map((item, i) => {
          return (
            <div key={i} className={selected == i ? styles.resource : ''}>
              <Resource
                name={item.name}
                image={item.image}
                onClick={() => setSelected(i)}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.description}>
        <Description image={resources[selected].image} />
      </div>
    </div>
  );
}
