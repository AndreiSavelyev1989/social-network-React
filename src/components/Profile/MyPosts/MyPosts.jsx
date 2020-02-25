import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profileReducer';


const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  } 
  
  return (
    <div className={styles.postsBlock}>
      <div>My posts</div>
      <div>
        <textarea onChange = {onPostChange} ref = {newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick = {addPost}>Add post</button>
      </div>
      <div className={styles.posts}>New posts

      {postElements}

      </div>

    </div>

  )
}

export default MyPosts;