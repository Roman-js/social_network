import React from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UserContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";


class App extends React.Component {

    render = () => {
        //debugger;
        return (

            <div className='app_wrapper'>

                <HeaderContainer />
                <NavBar/>
                <div className='content_wrapper'>
                    <Route path='/profile/:UserId?' render={() => <ProfileContainer />}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users'   render={()=><UserContainer />}/>
                    <Route path='/login'   render={()=><LoginPage />}/>
                </div>
            </div>
        );
    }
}

export default App;
App.propTypes = {
    App: PropTypes.number
};