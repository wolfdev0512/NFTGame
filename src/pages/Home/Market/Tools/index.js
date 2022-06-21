import React, { useState } from 'react';
import styles from './tool.module.scss';
import FirstBackground from '../../../../components/shared/background/FirstBackground';
import Order from '../../../../components/market/Order';
import Offer from '../../../../components/market/Offer/inex';
import hunting from '../../../../assets/image/market/hunting.png';
import farming from '../../../../assets/image/market/farming.png';
import fishing from '../../../../assets/image/market/fishing.png';
import logging from '../../../../assets/image/market/logging.png';
import mining from '../../../../assets/image/market/mining.png';
import brand from '../../../../assets/image/market/brand.png';
import tools from '../../../../assets/image/market/tool.png';
import SellItem from '../../../../components/market/SellItem';
import { sellItems, buyItems } from '../../../../const';
import ToolsDescription from './ToolsDescription';
import BuyItem from '../../../../components/market/BuyItem';

export default function Tools() {
  const [orders, setOrders] = useState([
    { status: 'sell', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
    { status: '', itemnumber: 0 },
  ]);
  const [orderNumber, setOrderNumber] = useState(1);
  const [marketState, setMarketState] = useState('sell');
  const [seletedItem, setSeletedItem] = useState(0);
  const [orderTrade, setOrderTrade] = useState(false);

  const updateOrder = (state) => {
    setMarketState(state);
    let orderData = orders;
    orderData[orderNumber - 1].status = state;
    setOrders(orderData);
    setSeletedItem(0);
    setOrderTrade(false);
  };

  const updatOrderItem = () => {
    let orderData = orders;
    orderData[orderNumber - 1].itemnumber = seletedItem;
    setOrders(orderData);
    setSeletedItem(0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.orders}>
        <FirstBackground>
          <p className={styles.title}>CURRENT ORDERS</p>
          <div className={styles.tradeitem}>
            {orders.map((item, i) => {
              return (
                <Order
                  onClick={() => {
                    setOrderNumber(i + 1), setOrderTrade(true);
                  }}
                  key={i}
                  status={item.status}
                  itemnumber={item.itemnumber}
                />
              );
            })}
          </div>
        </FirstBackground>
      </div>
      <div className={styles.buyselection}>
        <div className={styles.items}>
          <FirstBackground>
            <div className="p-3">
              <div className={styles.header}>
                <div className={styles.left}>
                  <div className={styles.brand}>
                    <img src={brand} alt="brand" />
                  </div>
                  <div className={styles.brand}>
                    <img src={mining} alt="mining" />
                  </div>
                  <div className={styles.brand}>
                    <img src={fishing} alt="fishing" />
                  </div>
                  <div className={styles.brand}>
                    <img src={hunting} alt="hunting" />
                  </div>
                  <div className={styles.brand}>
                    <img src={logging} alt="logging" />
                  </div>
                  <div className={styles.brand}>
                    <img src={farming} alt="farming" />
                  </div>
                  <div className={styles.brand}>
                    <img src={tools} alt="tools" />
                  </div>
                </div>
                <div className={styles.balance}>
                  <p>Available Balance</p>
                  <p>15,000.00</p>
                </div>
              </div>
              {marketState == 'sell' ? (
                <div className={styles.list + ' grid grid-cols-6 gap-6'}>
                  {sellItems.map((item, i) => {
                    return (
                      <div
                        className={
                          seletedItem == i + 1 ? styles.selected : styles.noSell
                        }
                        key={i}
                      >
                        <SellItem
                          image={item.image}
                          number={item.number}
                          onClick={() => setSeletedItem(i + 1)}
                        />
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className={styles.list + ' grid grid-cols-2 gap-2'}>
                  {buyItems.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          seletedItem == i + 1
                            ? styles.selected
                            : styles.buyitem
                        }
                        onClick={() => setSeletedItem(i + 1)}
                      >
                        <BuyItem image={item.image} />
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </FirstBackground>
        </div>
        <ToolsDescription
          seletedItem={seletedItem}
          marketState={marketState}
          trade={updatOrderItem}
        />
      </div>
      {orderTrade && <Offer onResponse={updateOrder} />}
    </div>
  );
}
