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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log("Name is", state.name);
  document.getElementById('app').innerHTML = state.name;

});

var currentSate = store.getState();
//unsubscribe();


console.log('currentSate', currentSate);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Stephen'
});



store.dispatch({
  type: 'CHANGE_NAME',
  name:'Emily'
});
