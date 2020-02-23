import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';



const DialogItem = (props) => {

    return (
        <div>

            <div className={classes.name}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
            <div className={classes.avatar}>
                {props.avatar}

            </div>
        </div>

    )
}
export default DialogItem;
DialogItem.propTypes = {
    DialogItem: PropTypes.object
};