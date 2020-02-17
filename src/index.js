import React from 'react';
import './index.css';
import store from "./Redux/state";
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";


 let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                         dispatch = {store.dispatch.bind(store)}
                         //addDialog={store.addDialog.bind(store)}
                         //updateComment={store.updateComment.bind(store)}
                         //addPost={store.addPost.bind(store)}
                        // updatePost={store.updatePost.bind(store)}
    /> </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
