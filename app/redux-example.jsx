var redux = require('redux');

console.log('starting redux example');


var reducer = (state = {name: 'Anonymous'}, action) => {
//  state = state || {name: 'Anonymous'};

switch (action.type) {
  case 'CHANGE_NAME':
    return {
      ...state,
      name: action.name
    };
  default:
   return state;
 }
};
var store = redux.createStore(reducer);

var currentSate = store.getState();

console.log('currentSate', currentSate);


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Stephen'
});

console.log('Name should be Stephen', store.getState());
