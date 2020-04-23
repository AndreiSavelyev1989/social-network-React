import profileReducer, { addPost, deletePost } from "./profileReducer";


let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 15 },
        { id: 2, message: 'My name is Andrew.', likesCount: 30 },
        { id: 2, message: 'How old are you?', likesCount: 23 },
    ],
}

test('length of posts should be increment', () => {
    let action = addPost('it-kamasutra');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
  });

test('message of new post should be correct', () => {
    let action = addPost('it-kamasutra');
    let newState = profileReducer(state, action);
    expect(newState.posts[3].message).toBe('it-kamasutra');
  });

test('after delete length of posts should be decrement', () => {
    let action = deletePost(1);
    let newState = profileReducer(state, action);
     expect(newState.posts.length).toBe(2);
  });

test(`after delete length of posts shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = profileReducer(state, action);
     expect(newState.posts.length).toBe(3);
  });
