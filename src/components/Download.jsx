import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = ({ Link }) => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.blackText} ${styles.h1Text}`}>
            Download The Souce Code
          </h1>
          <p className={`${styles.blackText} ${styles.pText}`}>
            Get the Full Source Code on Github
          </p>
        </div>
        <button
          onClick={() => window.open(Link, '_blank')}
          className={`${styles.btnPrimary}`}
        >
          Source Code
        </button>
        <div className={`${styles.flexCenter}`}>
          <img
            src={assets.scene}
            alt="download_png"
            className={`${styles.fullImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
