const createStore = require('redux').createStore;

function counter(state = 0, action) {
  switch(action.type) {
    case 'INCREAMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'INCREAMENT'})
store.dispatch({ type: 'INCREAMENT'})
store.dispatch({ type: 'DECREAMENT'})

