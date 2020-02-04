import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";


const Profile = (props) => {


    return (

        <div className={classes.profileItems}>
            <ProfileInfo/>
            <MyPosts state={props.state.posts}
                     stateCommon={props.stateCommon.avatars}
                     addPost={props.addPost}
                     updatePost={props.updatePost}/>
        </div>

    )
}


export default Profile;
Profile.propTypes = {
    Profile: PropTypes.object
};
