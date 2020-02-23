import React from 'react';
import PropTypes from 'prop-types';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";





const MyPostsContainer = (props) => {
//debugger;


    let addPost = () => {
        //props.dispatch({type:'ADD-POST'});
        props.store.dispatch(addPostActionCreator())//
    };

    let updatePost = (text) =>{

        props.store.dispatch(updatePostActionCreator(text))
    };

    return <MyPosts onAddPost={addPost}
                    onUpdatePost={updatePost}
                    store={props.store.getState().profilePage.posts}/>

}

export default MyPostsContainer;

MyPosts.protoType = {
    MyPosts: PropTypes.object
}