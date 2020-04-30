import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';


const ProfileInfo = ({profile, status, updateStatus}) => {

  if (!profile) {
    return <Preloader />
  }

  let lookingJobImage = () => {
    let jobImage = profile.lookingForAJob;
    return jobImage
      ? <img className={styles.jobImage} src='https://img2.freepng.ru/20180519/kse/kisspng-smiley-veselyy-photography-5b007126476a15.4166329615267556222925.jpg' />
      : <img className={styles.jobImage} src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-angry-emoji-vector-icon-png-image_3720389.jpg' />
  }

  return (
    <div>

      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large} />
        <div>{profile.aboutMe}</div>
        <div>facebook : {profile.contacts.facebook}</div>
        <div>website: {profile.contacts.website}</div>
        <div>vk: {profile.contacts.vk}</div>
        <div>twitter: {profile.contacts.twitter}</div>
        <div>instagram: {profile.contacts.instagram}</div>
        <div>youtube: {profile.contacts.youtube}</div>
        <div>github: {profile.contacts.github}</div>
        <div>mainLink: {profile.contacts.mainLink}</div>
        <div>lookingForAJob: {lookingJobImage()}</div>
        <div>lookingForAJobDescription: {profile.lookingForAJobDescription}</div>
        <div>fullName: {profile.fullName}</div>
        <div>userId: {profile.userId}</div>
      </div>

      <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
    </div>
  )
}

export default ProfileInfo;