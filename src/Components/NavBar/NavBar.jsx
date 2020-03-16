import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import PropTypes from 'prop-types';


const NavBar = () => {

    let list = [
        {adress: '/profile', link: 'Profile'},
        {adress: '/dialogs', link: 'Messages'},
        {adress: '/users', link: 'Users'},
        {adress: '/news', link: 'News'},
        {adress: '/music', link: 'Music'},
        {adress: '/settings', link: 'Settings'},

    ];
    let listElements = list.map(way =>
        <div className={classes.links}>
            <NavLink to={way.adress} key={Math.floor(Math.random()*100)} activeClassName={classes.active}>{way.link}</NavLink>
        </div>)
    return (
        <nav className={classes.nav}>

            {listElements}

        </nav>


    );
}

export default NavBar;

NavBar.protoType = {
    NavBar: PropTypes.object
}