import React, { useState } from 'react';
import styles from './mining.module.scss';
import Container from '../../../components/mining/Container';
import UnStakeButton from '../../../components/shared/button/UnStakeButton';
import GatherButton from '../../../components/shared/button/GatherButton';
import ConfirmBox from '../../../components/shared/dialog/ConfirmBox';
import GatherDialog from '../../../components/mining/GatherDialog';
import Stake from './Stake';
import ModalLayout from '../../../components/shared/dialog/ModalLayout';
import AvailableContainer from '../../../components/mining/AvailableContainer';
import FirstBackground from '../../../components/shared/background/FirstBackground';

export default function Mining() {
  const [tab, setTab] = useState(true);
  const [togather, setTogather] = useState(123456789);
  const [tostared, setTostared] = useState(123456789);

  const [unStake, setUnStake] = useState(false);
  const [gather, setGather] = useState(false);

  return (
    <>
      <ModalLayout title="Mining">
        <div className={styles.content}>
          <div className={styles.indicontent}>
            <FirstBackground pad>
              <div className={styles.tabheader}>
                <p
                  onClick={() => setTab(true)}
                  className={tab ? styles.active : ''}
                >
                  Working
                </p>
                <p
                  onClick={() => setTab(false)}
                  className={tab ? '' : styles.active}
                >
                  Available workers
                </p>
              </div>
              <div className={styles.tabcontent}>
                {tab ? (
                  <>
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                    <Container />
                  </>
                ) : (
                  <>
                    <AvailableContainer />
                    <AvailableContainer />
                    <AvailableContainer />
                    <AvailableContainer />
                  </>
                )}
              </div>
            </FirstBackground>
          </div>
          <div className={styles.indicontent}>
            <FirstBackground pad>
              {tab ? (
                <div className={styles.tabright}>
                  <div className={styles.stats}>
                    <p>RESOURCES STAS</p>
                  </div>
                  <div className={styles.resourcecontent}>
                    <div className={styles.number}>{togather}</div>
                    <p>TOTAL GATHERED</p>
                    <div className={styles.number}>{tostared}</div>
                    <p>TOTAL STARED</p>
                  </div>
                  <GatherButton onClick={() => setGather(true)}>
                    GATHERED
                  </GatherButton>
                  <UnStakeButton
                    onClick={() => {
                      setUnStake(true);
                    }}
                  >
                    UNSTAKE
                  </UnStakeButton>
                  <div></div>
                </div>
              ) : (
                <Stake />
              )}
            </FirstBackground>
          </div>
        </div>
      </ModalLayout>
      <ConfirmBox
        visible={unStake}
        onClose={() => setUnStake(false)}
        action={() => setUnStake(false)}
      >
        <p className={styles.confirm}>This action will unstake your NFTs</p>
      </ConfirmBox>
      <GatherDialog visible={gather} onClose={() => setGather(false)} />
    </>
  );
}
