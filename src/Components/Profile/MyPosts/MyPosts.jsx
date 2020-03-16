import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';


const MyPosts = (props) => {

    let postElements = props.store.map(store => <Post message={store.message}  key={Math.floor(Math.random()*100)} likes={store.likes} avatar={store.avatar}
    />);

    let addPost = () => {
        props.onAddPost();
    };
    let updatePost = (e) => {
        let text = e.currentTarget.value;
        props.onUpdatePost(text);
    };
    return (
        <div className={classes.postItems}>
            <h3>New Post</h3>
            <div>
                <div>
                    <textarea onChange={updatePost} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                <div>My Posts</div>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;

MyPosts.protoType = {
    MyPosts: PropTypes.object
}