// import React from "react";
// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
//
// let store = {
//
//     _state: {
//
//         dialogsPage: {
//             messages: [
//                 {id: 1, text: 'Hello dudes! Are you know React?'},
//                 {id: 2, text: 'I need learning React as fast as it possible.'},
//                 {id: 3, text: 'We will be study with you.'}
//             ],
//             newPostText: '',
//             names: [
//                 {id: 1, name: 'Roman'},
//                 {id: 2, name: 'Vitalya'},
//                 {id: 3, name: 'Kostyk'},
//                 {id: 4, name: 'Sasha'},
//                 {id: 5, name: 'Gerbert'}
//             ],
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hello guys!!', likes: 21},
//                 {id: 2, message: 'What are you doing dude?', likes: 44},
//                 {id: 3, message: 'Want to check of add some more comment', likes: 89}
//             ],
//             newPostText: ''
//         },
//         commonElements: {
//             avatars: [
//                 {
//                     id: 1, avatar: <img
//                         src='data:image/jpeg;base64,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'/>
//                 }
//             ]
//         }
//
//     },
//
//     getState() {
//         return this._state
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this.rerenderEntireTree(this._state);
//         //      if(action.type === 'ADD-DIALOG'){
//         //          let newDialog = {id: 4, text: this._state.dialogsPage.newPostText};
//         //          this._state.dialogsPage.messages.push(newDialog);
//         //          this.rerenderEntireTree(this._state);
//         //      }
//         //      else if (action.type === 'UPDATE-DIALOG'){
//         //          this._state.dialogsPage.newPostText = action.currentDialog;
//         //          this.rerenderEntireTree(this._state);
//         //      }
//         //      else if (action.type === 'ADD-POST'){
//         //          let newPost = {id: 4, message: this._state.profilePage.newPostText, likes: 0};
//         //          let copyPosts = [...this._state.profilePage.posts, newPost];
//         //          this._state.profilePage.posts.push(newPost)
//         //          this.rerenderEntireTree(this._state);
//         //      }
//         //      else if (action.type === 'UPDATE-POST'){
//         //          this._state.profilePage.newPostText = action.currentPost;
//         //
//         //      }
//     },
//
//     subscribe(observer) {
//         this.rerenderEntireTree = observer
//     },
// }
//
// export default store;
// window.store = store;