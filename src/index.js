import React from 'react';
import './index.css';
import state, {subscribe} from "./Redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addDialog, updateComment, updatePost} from "./Redux/state";
import {addPost} from "./Redux/state";

 let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addDialog={addDialog}
                         addPost={addPost}
                         updateComment={updateComment}
                         updatePost={updatePost}/>, document.getElementById('root'));
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
