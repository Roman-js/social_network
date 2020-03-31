import React from "react";
import {usersAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';

let initialState = {
     users: [
    //     {
    //         id: 1,
    //         fullName: 'Roman D.',
    //         status: 'Looking for the job write now!!',
    //         cityName: 'Kharkov',
    //         countryName: 'Ukraine',
    //         followed: false,
    //         avatar: 'https://www.forumfanatics.com/wp-content/uploads/2014/09/avatars.jpg'
    //     },
    //     {
    //         id: 2,
    //         fullName: 'Petre S.',
    //         status: 'Looking for the job write now!!',
    //         cityName: 'Kharkov',
    //         countryName: 'Ukraine',
    //         followed: true,
    //         avatar: 'https://www.forumfanatics.com/wp-content/uploads/2014/09/avatars.jpg'
    //     },
    //     {
    //         id: 3,
    //         fullName: 'Igor W.',
    //         status: 'Looking for the job write now!!',
    //         cityName: 'Kharkov',
    //         countryName: 'Ukraine',
    //         followed: false,
    //         avatar: 'https://www.forumfanatics.com/wp-content/uploads/2014/09/avatars.jpg'
    //     }
    ],
     pageSize: 5,
     totalUsersCount: 0,
     currentPage: 1,
     isFetching: false,
     followingInProgress: []
}

const usersReducer = (state = initialState, action) =>{

    switch (action.type) {
        case FOLLOW:{

            return  {
                ...state,
                users: [...state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })]
            }

        }
        case UNFOLLOW: {
       return { ...state,
                users: [...state.users.map(u => {
                if(u.id === action.userId){
                    return {...u, followed: false}
                }
                return u;
            })]

        }
        }

        case SET_USERS: return{...state, users: action.users};

        case SET_PAGE: return {...state, currentPage: action.numberOfPage};

        case SET_USERS_COUNT: return {...state, totalUsersCount: action.numberOfUsers};

        case TOGGLE_IS_FETCHING:  return {...state, isFetching: action.isFetching};

        case TOGGLE_IS_FOLLOWING_PROGRESS:  return {...state,
            followingInProgress: action.followingInProgress?
                [...state.followingInProgress, action.userId]
              : state.followingInProgress.filter(id=> id !==action.userId)};

        default: return state

    }

}

export const acceptFollow = (userId) => ({type: FOLLOW, userId})
export const acceptUnfollow = (userId) =>({type: UNFOLLOW, userId})
export const setUsers = (users) =>({type: SET_USERS, users})
export const setPage = (numberOfPage)=> ({type: SET_PAGE, numberOfPage})
export const setUsersCount = (numberOfUsers)=>({type: SET_USERS_COUNT, numberOfUsers})
export const toggleIsFetching = (isFetching)=>({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (followingInProgress, userId)=>({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

export const getUsersThunkCreator= (currentPage, pageSize) => {
    return (dispatch) => {

        //if (state.users.length === 0) {
            dispatch(toggleIsFetching(true))
            dispatch(setPage(currentPage))

            usersAPI.getUsers(currentPage, pageSize)

                .then(data => {
                    dispatch(toggleIsFetching(false))
                    dispatch(setUsers(data.items));
                    dispatch(setUsersCount(data.totalCount))
                })
        }
    }

    export const unFollowThunkCreator = (UserId, followOrUnfollow)=>{
    return(dispatch) =>{
        dispatch(toggleIsFollowingProgress(true, UserId))
        usersAPI.unfollow(UserId)
            .then(data => {
                //debugger;
                if (data.resultCode === 0) {
                    dispatch(acceptUnfollow(UserId))
                }
                dispatch(toggleIsFollowingProgress(false, UserId))
            });
    }
    }

    export const followThunkCreator = (UserId) =>{
    return(dispatch)=>{
        dispatch(toggleIsFollowingProgress(true, UserId))
        usersAPI.follow(UserId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(acceptFollow(UserId))
                }
                dispatch(toggleIsFollowingProgress(false, UserId))
            });
    }
    }
export default usersReducer;