import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
// import thunk from 'redux-thunk';

// import logger from 'redux-logger';


const thunk = ({dispatch,getState}) => 
  (next) => (action) => {
    console.log(action);
    console.log(typeof action);
    if(typeof action == 'function'){
      console.log(action);
      action(dispatch);
      return;
    }
    next(action);
  
}


const store = createStore(rootReducer,applyMiddleware(thunk));

// store.dispatch({
// type:'ADD_MOVIES',
// movies : [{name:'Super Man'}]
// })


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);




