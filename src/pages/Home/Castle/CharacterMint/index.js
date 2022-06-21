import React from 'react';
import SecondBackground from '../../../../components/shared/background/SecondBackground';
import ThirdBackground from '../../../../components/shared/background/ThirdBackground';
import styles from './charactermint.module.scss';
import character from '../../../../assets/image/castle/character.png';
import FirstBackground from '../../../../components/shared/background/FirstBackground';
import ProgressBar from '../../../../components/shared/progressbar';
import MintButton from '../../../../components/shared/button/MintButton';

export default function CharacterMint() {
  return (
    <div className={styles.container}>
      <div className={styles.character}>
        <ThirdBackground>
          <SecondBackground>
            <div className="flex justify-center items-center p-8">
              <img src={character} alt="character" />
            </div>
          </SecondBackground>
        </ThirdBackground>
      </div>
      <div className={styles.description}>
        <div>
          <FirstBackground>
            <div className={styles.des}>
              <div className={styles.des1}>
                <div className={styles.number}>
                  <p>Sol</p>
                  <p>99999999</p>
                </div>
                <p className={styles.title}>Available balance</p>
              </div>
              <div className={styles.des1}>
                <div className={styles.number}>
                  <p>Sol</p>
                  <p>99999999</p>
                </div>
                <p className={styles.title}>Price</p>
              </div>
            </div>
          </FirstBackground>
        </div>
        <div>
          <FirstBackground>
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
    </div>
  );
}
