import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {

  let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)



  let addNewPost = (values) => {
    props.addPost(values.newPostText);
  }

  return <div className={styles.postsBlock}>
    <div>My posts</div>

    <AddNewPostForm onSubmit={addNewPost} />

    <div className={styles.posts}>New posts

    {postElements}

    </div>

  </div>
}

let AddNewPostForm = (props) => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field component='textarea' name='newPostText' placeholder='Enter your message' />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}

AddNewPostForm = reduxForm({ form: 'postNewPostText' })(AddNewPostForm)

export default MyPosts;