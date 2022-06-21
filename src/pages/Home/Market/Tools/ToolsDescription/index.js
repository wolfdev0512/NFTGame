import React, { useState } from 'react';
import styles from './toolsdescription.module.scss';
import FirstBackground from '../../../../../components/shared/background/FirstBackground';
import starative from '../../../../../assets/image/market/starative.png';
import star from '../../../../../assets/image/market/star.png';
import ConfirmBox from '../../../../../components/shared/dialog/ConfirmBox';

export default function ToolsDescription(props) {
  const { seletedItem, marketState, trade, ...rest } = props;
  const [confirm, setConfirm] = useState(false);
  return (
    <>
      <div className={styles.resourceDescription}>
        <div className={styles.itemDes}>
          <FirstBackground>
            {seletedItem ? (
              <div className="px-1">
                <div className="pt-3 border-b-2 border-amber-300			">
                  <div className="flex mx-5 items-center justify-between">
                    <p className="text-xl text-fuchsia-700	">
                      Knights sword{' '}
                      <span className="text-purple-800">Epic</span>
                    </p>
                    <div className="flex items-center">
                      <img src={starative} />
                      <img src={starative} />
                      <img src={starative} />
                      <img src={starative} />
                      <img src={star} />
                      <p className="rounded-full bg-black px-3 ml-2">i</p>
                    </div>
                  </div>
                </div>
                <div className="pb-3 ">
                  <div className="flex mx-5 justify-between items-end">
                    <div className="w-1/2">
                      <div className="flex justify-items-start">
                        <p className="w-8/12">Attack</p>
                        <p className="w-4/2">Defense</p>
                      </div>
                      <div className="flex justify-items-start">
                        <p className="w-1/3">+38</p>
                        <p className="w-1/3">Stab</p>
                        <p className="w-1/3">+2</p>
                      </div>
                      <div className="flex justify-items-start">
                        <p className="w-1/3">+32</p>
                        <p className="w-1/3">Magic</p>
                        <p className="w-1/3">+350</p>
                      </div>
                      <div className="flex justify-items-start">
                        <p className="w-1/3">+4</p>
                        <p className="w-1/3">Slash</p>
                        <p className="w-1/3">+1</p>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex">
                        <p>Strength</p>
                        <p>42</p>
                      </div>
                      <div className="flex">
                        <p>Range Damage</p>
                        <p>8</p>
                      </div>
                      <div className="flex">
                        <p>Magic Damage</p>
                        <p>35</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4">
                <div className={styles.noSelect}>
                  {marketState == 'sell' ? (
                    <p>Select an item to sell</p>
                  ) : (
                    <p>Select an item to buy</p>
                  )}
                </div>
              </div>
            )}
          </FirstBackground>
        </div>
        <div className="flex m-2 w-2/5">
          <div className={styles.prices}>
            <p>Qty</p>
            <input type="number" placeholder="Max" />
            <p>Price per item</p>
            <input type="number" />
            <p>Total cost</p>
            <input type="number" />
          </div>
          <div
            className={`${styles.noSelected} ${
              seletedItem && (marketState == 'sell' ? styles.sell : styles.buy)
            } `}
            onClick={() => seletedItem && setConfirm(true)}
          >
            {marketState == 'sell' ? 'SELL' : 'BUY'}
          </div>
        </div>
      </div>
      <ConfirmBox
        visible={confirm}
        onClose={() => setConfirm(false)}
        action={() => trade()}
        {...rest}
      >
        <p
          className={styles.confirm}
        >{`Are you sure you want to ${marketState} your item`}</p>
      </ConfirmBox>
    </>
  );
}
