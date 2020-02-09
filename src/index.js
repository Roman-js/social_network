import React from 'react';
import './index.css';
import store from "./Redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';


 let rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state}
                         addDialog={store.addDialog.bind(store)}
                         addPost={store.addPost.bind(store)}
                         updateComment={store.updateComment.bind(store)}
                         updatePost={store.updatePost.bind(store)}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
