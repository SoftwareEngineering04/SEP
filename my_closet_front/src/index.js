import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore as createStore} from 'redux';
import {Provider} from 'react-redux';

function reducer(currentState, action) {
    if(currentState === undefined) {
      return {
        id : -1,
        password: -1,
        name: '홍길동',
        email: '-1@naver.com',
      }
    }
    const newState = {...currentState};
    if(action.type === 'login') {
        newState.name = action.loginName;
        newState.id = action.loginId;
        newState.password = action.loginPw;
        newState.email = action.loginEmail;
    }
    else if(action.type === 'changeInfo') {
        newState.name = action.newName;
        newState.password = action.newPw;
        newState.email = action.newEmail;
    }
    else if(action.type === 'logout') {
        return {
            id : -1,
            password: -1,
            name: '홍길동',
            email: '-1@naver.com',
        }
    }
    return newState;
  }
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

