const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_DIALOG = 'UPDATE-DIALOG'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_DIALOG:
            let newDialog = {id: 4, text: state.newPostText};
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