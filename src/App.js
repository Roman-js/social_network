import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import PropTypes from 'prop-types';


class App extends React.Component {

    render = () => {
        //debugger;
        return (

                <div className='app_wrapper'>
                    <Header/>
                    <NavBar/>
                    <div className='content_wrapper'>
                        <Route path='/profile' render={() => <Profile state={this.props.state.profilePage}
                                                                      stateCommon={this.props.state.commonElements}
                                                                      //addPost={this.props.addPost}
                                                                      //updatePost={this.props.updatePost}
                                                                      dispatch = {this.props.dispatch}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs state={this.props.state.dialogsPage}
                                                                      stateCommon={this.props.state.commonElements}
                                                                      //addDialog={this.props.addDialog}
                                                                      //updateComment={this.props.updateComment}
                                                                      dispatch={this.props.dispatch}/>}/>
                        {/*<Route path='/news' component={Profile} />*/}
                        {/*<Route path='/music' component={Profile}/>*/}
                        {/*<Route path='/settings' component={Profile}/>*/}
                    </div>
                </div>

        );
    }
}

export default App;
App.propTypes = {
    App: PropTypes.number
};