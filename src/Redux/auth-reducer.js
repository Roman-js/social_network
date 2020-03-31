import React from "react";
import {usersAPI} from "../API/api";

const SET_USER_DATA = 'SET-USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SET_USER_DATA:{
            return  {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state
    }
}

export const setAuthUserData = (email, userId, login) => ({type: SET_USER_DATA, data: {email, userId, login}});

export const loginThunkCreator = ()=>(dispatch) => {
        usersAPI.login()
        .then(response=>{
            if (response.resultCode === 0){
               return dispatch(setAuthUserData(response.data.email, response.data.userId, response.data.login))}
        })}



export default authReducer;