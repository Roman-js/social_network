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
        case ADD_DIALOG:
            let newDialog = {id: 4, text: state.newPostText, avatar: state.avatars[0].avatar};
            state.messages.push(newDialog);
            state.newPostText = '';
            return state;

        case UPDATE_DIALOG:
            state.newPostText = action.currentDialog;
            return state;

        default: return state;
    }
}
export const addDialogActionCreator = () =>({type: 'ADD-DIALOG'})
export const updateDialogActionCreator = (text) =>({type: 'UPDATE-DIALOG', currentDialog: text})

export  default dialogsReducer;