import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }

  let lookingJobImage = () => {
    let jobImage = props.profile.lookingForAJob;
    return jobImage
      ? <img className={styles.jobImage} src='https://img2.freepng.ru/20180519/kse/kisspng-smiley-veselyy-photography-5b007126476a15.4166329615267556222925.jpg' />
      : <img className={styles.jobImage} src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-angry-emoji-vector-icon-png-image_3720389.jpg' />
  }

  return (
    <div>
      {/* <img src='http://oboi-dlja-stola.ru/file/18958/760x0/16:9/%D0%9C%D0%B0%D0%B3%D0%B8%D1%8F-%D0%B2-%D0%B1%D1%83%D1%82%D1%8B%D0%BB%D0%BA%D0%B5.jpg' /> */}

      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.aboutMe}</div>
        <div>facebook : {props.profile.contacts.facebook}</div>
        <div>website: {props.profile.contacts.website}</div>
        <div>vk: {props.profile.contacts.vk}</div>
        <div>twitter: {props.profile.contacts.twitter}</div>
        <div>instagram: {props.profile.contacts.instagram}</div>
        <div>youtube: {props.profile.contacts.youtube}</div>
        <div>github: {props.profile.contacts.github}</div>
        <div>mainLink: {props.profile.contacts.mainLink}</div>
        <div>lookingForAJob: {lookingJobImage()}</div>
        <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
        <div>fullName: {props.profile.fullName}</div>
        <div>userId: {props.profile.userId}</div>
      </div>

      <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
    </div>
  )
}

export default ProfileInfo;