import React from 'react';
import classes from './Header.module.css';
import PropTypes from 'prop-types';
import {NavLink} from "react-router-dom";


const Header = (props) => {
    //debugger
    return (

            <header className={classes.header}>
                <img
                    src='data:image/png;base64,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'/>
           <div className={classes.loginBlock}>
              { !props.isAuth?  <NavLink to={'/login'}>Login</NavLink>: props.login}


           </div>
            </header>


    );
}

export default Header;

Header.protoTypes = {
    Header: PropTypes.object
}