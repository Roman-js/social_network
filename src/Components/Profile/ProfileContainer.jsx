
import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getPageOfUserThunkCreator, setUserProfile} from "../../Redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {usersAPI} from "../../API/api";

class ProfileContainer extends React.Component {

    componentDidMount() {

        let UserId = this.props.match.params.UserId;
        if(!UserId) UserId = 6207;
        this.props.loginThunkCreator(UserId)
        // usersAPI.get(`profile/${UserId}`)
        //     .then(response => {
        //         this.props.setUserProfile(response.data);
        //     });
    }

    render() {
        if(!this.props.isAuth)return <Redirect to='/login'/>
        return (
            <Profile {...this.props } profile = {this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) =>({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth

});
let withUrlDataContainerComponent =  withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile, loginThunkCreator: getPageOfUserThunkCreator}) (withUrlDataContainerComponent);