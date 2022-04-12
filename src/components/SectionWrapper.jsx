import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';
import Button from './Button';

const SectionWrapper = ({
  mokeupImg,
  showBtn,
  title,
  description,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
    ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} ${
          reverse ? styles.textRight : styles.textLeft
        }  w-11/12 sm:w-full minmid:w-3/4`}
      >
        <div
          className={` ${styles.descDiv} ${
            reverse ? 'fadeRightMini' : 'fadeLeftMini'
          }`}
        >
          <h1
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.h1Text
            } `}
          >
            {title}
          </h1>
          <p
            className={`${reverse ? styles.blackText : styles.whiteText} ${
              styles.descriptionText
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              Link="https://expo.dev/@webdevhrithik/nftapp"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mokeupImg}
            alt="mokeup"
            className={`${styles.sectionImg} ${
              reverse ? 'fadeLeftMini' : 'fadeRightMini'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
