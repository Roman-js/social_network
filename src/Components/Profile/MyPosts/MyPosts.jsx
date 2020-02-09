import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';


const MyPosts = (props) => {
//debugger;
    let postElements = props.state.map(state => <Post message={state.message} likes={state.likes}
                                                      avatar={props.stateCommon[0]}/>);



    let addPost = (e) => {
        let text = e.currentTarget.value;
        props.addPost(text);
    };

    let updatePost = (e) =>{
        let text = e.currentTarget.value;
        props.updatePost(text);
    };


    return (

        <div className={classes.postItems}>
            <h3>New Post</h3>
            <div>
                <div>
                    <textarea onChange={updatePost} ></textarea>
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