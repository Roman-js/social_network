import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import PropTypes from 'prop-types';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


class App extends React.Component {

    render = () => {
        //debugger;
        return (

            <div className='app_wrapper'>
                <Header/>
                <NavBar/>
                <div className='content_wrapper'>
                    <Route path='/profile' render={() => <Profile store={this.props.store}
                                                                  //dispatch={this.props.dispatch}
                    />
                    }/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}
                                                                  //dispatch={this.props.dispatch}
                    />
                    }/>
                </div>
            </div>
        );
    }
}

export default App;
App.propTypes = {
    App: PropTypes.number
};