import React from "react";
import PropTypes from 'prop-types';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {


    let addDialog = () =>{
        props.store.dispatch(addDialogActionCreator());
    };

    let currentDialog = (text) =>{
        props.store.dispatch(updateDialogActionCreator(text));
    }
    return <Dialogs currentDialogText={currentDialog}
                    onAddDialog={addDialog}
                    store={props.store.getState().dialogsPage}/>
}

export default DialogsContainer;

Dialogs.propTypes = {
    Dialogs: PropTypes.object
};
