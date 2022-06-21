import React, { useState } from 'react';
import styles from './castle.module.scss';
import ModalLayout from '../../../components/shared/dialog/ModalLayout';
import character from '../../../assets/image/castle/character.png';
import tool from '../../../assets/image/castle/tool.png';
import MintButton from '../../../components/shared/button/MintButton';
import CharacterMint from './CharacterMint';
import ToolsMint from './ToolsMint';

export default function Castle() {
  const [castle, setCastle] = useState('selection');

  return (
    <>
      {castle == 'selection' && (
        <ModalLayout title="MINT SELECTION">
          <div className={styles.container}>
            <div className={`${styles.nfts} ${styles.selection}`}>
              <p className={styles.title}>NFTS</p>
              <div className={styles.content}>
                <img src={character} />
                <div className={styles.hovermint}>
                  <p>
                    Mint one of cool nfts to gather resources and fight tons of
                    mobs
                  </p>
                  <p>Available 1231/10000</p>
                  <div className="mt-6">
                    <MintButton onClick={() => setCastle('character')} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.tools} ${styles.selection}`}>
              <p className={styles.title}>TOOLS</p>
              <div className={styles.content}>
                <img src={tool} />
                <div className={styles.hovermint}>
                  <p>
                    Mint one of cool tools to gather resources and fight tons of
                    mobs
                  </p>
                  <p>Available 1231/10000</p>
                  <div className="mt-6">
                    <MintButton onClick={() => setCastle('toolsmint')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModalLayout>
      )}
      {castle == 'character' && (
        <ModalLayout title="MINT A NFT">
          <CharacterMint />
        </ModalLayout>
      )}
      {castle == 'toolsmint' && (
        <ModalLayout title="MINT A TOOL">
          <ToolsMint />
        </ModalLayout>
      )}
    </>
  );
}
