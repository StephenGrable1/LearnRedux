var redux = require('redux');
var axios = require('axios');

console.log('starting redux example');


var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New State: ', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url + '" target="_blank">View Your location</a>';
  }
});

var currentSate = store.getState();
//unsubscribe();


console.log('currentSate', currentSate);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));
store.dispatch (actions.addHobby('Feed Dog'));
store.dispatch (actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.changeName('Emily'));
store.dispatch (actions.addMovie('Mission Impossible', 'Action'));
store.dispatch (actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.removeMovie(2));
