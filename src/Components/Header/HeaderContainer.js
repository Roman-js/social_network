import React from 'react';
import classes from './Header.module.css';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {loginThunkCreator, setAuthUserData} from "../../Redux/auth-reducer";


class HeaderContainer extends React.Component {

    componentDidMount() {

this.props.loginThunkCreator()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
        //     .then(response => {
        //         //debugger
        //         if (response.data.resultCode === 0) {
        //             let {email, id, login} = response.data.data;
        //             this.props.setAuthUserData(email, id, login);
        //         }
        //     })
    }

    render() {

        return (
            <Header {...this.props} />

        );
    }
}

let mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        userId: state.auth.id,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthUserData, loginThunkCreator})(HeaderContainer)


