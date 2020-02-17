import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import PropTypes from 'prop-types';
import {addDialogActionCreator, updateDialogActionCreator} from "../../Redux/dialogs-reducer";



const Dialogs = (props) => {

//debugger;
    let nameElements = props.state.names.map(name =>
        <DialogItem name={name.name} id={name.id} avatar={props.stateCommon.avatars[0]}/>)
    let messageElements = props.state.messages.map(
        message => <MessageItem text={message.text}/>)

    let message = React.createRef();
    let addDialog = () =>{
        let text = message.current.value;
        props.dispatch(addDialogActionCreator());
    };

    let currentDialog = () =>{
        let text = message.current.value;
        props.dispatch(updateDialogActionCreator(text));
    }
    return (
        <div className={classes.dialogItems}>
            <div className={classes.dialog}>
                {nameElements}
            </div>
            <div className={classes.messages}>
                <div>
                    <textarea onChange={currentDialog} ref={ message }></textarea>
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
