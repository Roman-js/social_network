import React from "react";
import classes from './MessageItem.module.css';
import PropTypes from 'prop-types';


const MessageItem = (props) => {

    return (
        <div>
            <div className={classes.text}>{props.text}</div>
        </div>
    )
}


export default MessageItem;

MessageItem.propTypes = {
    MessageItem: PropTypes.object
};