import React from "react";

const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_DIALOG = 'UPDATE-DIALOG'

let initialState = {
    messages: [
        {id: 1, text: 'Hello dudes! Are you know React?'},
        {id: 2, text: 'I need learning React as fast as it possible.'},
        {id: 3, text: 'We will be study with you.'}
    ],
    newPostText: '',
    names: [
        {id: 1, name: 'Roman'},
        {id: 2, name: 'Vitalya'},
        {id: 3, name: 'Kostyk'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Gerbert'}
    ],
    avatars: [

        {id: 1, avatar:
                <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4FolXC6aeGZi91crpOff8py7yy45bcY6t2bPZhSK1U3kRsc5b'/>
        }
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_DIALOG:{
            let body = state.newPostText;
            let avatar = state.avatars[0].avatar;
            //let newDialog = {id: 6, text: users.newPostText, avatar: users.avatars[0].avatar};
           return {...state,
                newPostText: '',
                messages: [...state.messages, {id: Math.floor(Math.random()*100), text: body, avatar: avatar}]}
            //stateCopy.messages.push(newDialog);
            //users.newPostText = '';
           // return stateCopy;
}
        case UPDATE_DIALOG:{
            return {...state,
            newPostText: action.currentDialog}
            //stateCopy.newPostText = action.currentDialog;
           // return stateCopy;
}
        default: return state;
    }
}
export const addDialogActionCreator = () =>({type: 'ADD-DIALOG'})
export const updateDialogActionCreator = (text) =>({type: 'UPDATE-DIALOG', currentDialog: text})

export  default dialogsReducer;