import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PropTypes from "prop-types";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div className={classes.profileItems}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>

    )
}


export default Profile;
Profile.propTypes = {
    Profile: PropTypes.object
};
