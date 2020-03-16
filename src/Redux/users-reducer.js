import React from "react";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_USERS_COUNT = 'SET-USERS-COUNT'

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
     currentPage: 1
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

        case SET_USERS_COUNT: return {...state, totalUsersCount: action.numberOfUsers}
        default: return state

    }

}

export const followAC = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId) =>({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) =>({type: 'SET-USERS', users})
export const setPageAC = (numberOfPage)=> ({type: SET_PAGE, numberOfPage})
export const setUsersCountAC = (numberOfUsers)=>({type: SET_USERS_COUNT, numberOfUsers})

export default usersReducer;