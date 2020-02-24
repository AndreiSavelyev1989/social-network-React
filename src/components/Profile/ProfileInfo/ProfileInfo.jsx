import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <img src='http://oboi-dlja-stola.ru/file/18958/760x0/16:9/%D0%9C%D0%B0%D0%B3%D0%B8%D1%8F-%D0%B2-%D0%B1%D1%83%D1%82%D1%8B%D0%BB%D0%BA%D0%B5.jpg' />
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  )
}

export default ProfileInfo;