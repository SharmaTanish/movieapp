import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import rootReducer from './reducers'
import {createStore} from 'redux';

const store = createStore(rootReducer);

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




