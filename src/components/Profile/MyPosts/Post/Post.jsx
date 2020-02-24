import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={styles.item}><img src='https://static.zerochan.net/Ulquiorra.Schiffer.full.1477675.jpg' />{props.message}</div>
      <div><span>Like {props.likesCount}</span></div>
    </div>
  )
}

export default Post;