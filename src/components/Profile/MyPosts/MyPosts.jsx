import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  } 
  
  return (
    <div className={styles.postsBlock}>
      <div>My posts</div>
      <div>
        <textarea onChange = {onPostChange} ref = {newPostElement} value={props.newPostText}/>
      </div>
      <div>
        <button onClick = {onAddPost}>Add post</button>
      </div>
      <div className={styles.posts}>New posts

      {postElements}

      </div>

    </div>

  )
}

export default MyPosts;