import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import PropTypes from 'prop-types';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/dialogs-reducer";



const Dialogs = (props) => {

    let nameElements = props.store.names.map(name =>
        <DialogItem name={name.name} id={name.id} avatar={props.store.avatars[0].avatar} />)
    let messageElements = props.store.messages.map(
        message => <MessageItem text={message.text}/>)


    let addDialog = () =>{
        props.onAddDialog();
    };

    let currentDialog = (e) =>{
        let text = e.currentTarget.value;
        props.currentDialogText(text);
        //props.dispatch(updateDialogActionCreator(text));
    }
    return (
        <div className={classes.dialogItems}>
            <div className={classes.dialog}>
                {nameElements}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea onChange={currentDialog} ></textarea>
                </div>
                <div>
                    <button onClick={ addDialog }>Add comment</button>
                </div>
                {messageElements}
            </div>

        </div>
    )
}

export default Dialogs;

Dialogs.propTypes = {
    Dialogs: PropTypes.object
};
