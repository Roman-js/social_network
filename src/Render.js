import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addDialog, updateComment, updatePost} from "./Redux/state";
import {addPost} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addDialog={addDialog}
                         addPost={addPost}
                         updateComment={updateComment}
                         updatePost={updatePost}/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
