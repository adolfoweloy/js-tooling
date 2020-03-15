import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './styles.css'
import {hot} from 'react-hot-loader'

import { createStore } from 'redux'

/// reducer
const counter = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  };

//// store
const store = createStore(counter);

//// component
const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <hr/>
      <h1>App here</h1>
      <App/>
    </div>
  );
  
const HotCounter = hot(module)(Counter);

//// binding it all together

const render = () => {
    ReactDom.render(
        <HotCounter 
            value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
        />, 
        document.getElementById('app')
    );
};

store.subscribe(render);
render();