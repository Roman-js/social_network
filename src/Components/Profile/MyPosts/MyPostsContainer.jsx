import React from 'react';
import PropTypes from 'prop-types';
import {addPostActionCreator, updatePostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



const mapStateToProps = (state) => {

    return {
        store: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onUpdatePost: (text) => {
            dispatch(updatePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

MyPosts.protoType = {
    MyPosts: PropTypes.object
}

// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let users = store.getState();
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())//
//                 };
//
//                 let updatePost = (text) => {
//                     store.dispatch(updatePostActionCreator(text))
//                 };
//
//                 return <MyPosts onAddPost={addPost}
//                                 onUpdatePost={updatePost}
//                                 store={users.profilePage.posts}/>
//             }
//             }
//         </StoreContext.Consumer>
//     )
//
// }