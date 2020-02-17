import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import PropTypes from 'prop-types';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";





const MyPosts = (props) => {
//debugger;
    let postElements = props.state.map(state => <Post message={state.message} likes={state.likes}
                                                      avatar={props.stateCommon[0]}/>);



    let addPost = () => {
        //props.dispatch({type:'ADD-POST'});
        props.dispatch(addPostActionCreator())//
    };

    let updatePost = (e) =>{
        let text = e.currentTarget.value;
        //props.dispatch({type: 'UPDATE-POST',currentPost: text});
        props.dispatch(updatePostActionCreator(text))
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