var redux = require('redux');

console.log('starting redux example');


var reducer = (state = {name: 'Anonymous'}, action) => {
//  state = state || {name: 'Anonymous'};

return state;
};
var store = redux.createStore(reducer);

var currentSate = store.getState();

console.log('currentSate', currentSate);
