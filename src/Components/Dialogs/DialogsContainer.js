import React from "react";
import PropTypes from 'prop-types';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return{
        store: state.dialogsPage,
        newPostText: state.newPostText,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        onAddDialog: () => {
            dispatch(addDialogActionCreator())
        },
        currentDialogText: (text) => {
            dispatch(updateDialogActionCreator(text));
        }

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;

Dialogs.propTypes = {
    Dialogs: PropTypes.object
};
