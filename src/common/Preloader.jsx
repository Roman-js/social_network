import React from "react";
import preload from './image/preload.gif'
import classes from './../Components/Users/Users.module.css'

const Preloader = () =>{

    return <img className={classes.preloader} src={preload}/>
}

export default Preloader