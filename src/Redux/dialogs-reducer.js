const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_DIALOG = 'UPDATE-DIALOG'

const dialogReducer = (state, action) => {

    switch (action.type) {

        case(ADD_DIALOG):
            let newDialog = {id: 4, text: state.newPostText};
            state.messages.push(newDialog)
            return state

        case (UPDATE_DIALOG):
            state.newPostText = action.currentDialog;
            return state
    }
}
export const addDialogActionCreator = () =>({type: 'ADD-DIALOG'})
export const updateDialogActionCreator = (text) =>({type: 'UPDATE-DIALOG', currentDialog: text})

export  default dialogReducer;