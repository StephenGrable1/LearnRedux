var redux = require('redux');

console.log('starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []

};

var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name

    default:
      return state;
  };
};

var hobbiesReducer = (state = [], action) =>{
  switch(action.type) {

    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];

      case 'REMOVE_HOBBY':
        return state.filter((hobby) => hobby.id  !== action.id)

      default:
        return state;
  };
};


var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];

      case 'REMOVE_MOVIE':
        return state.filter((movie) => movie.id !== action.id)

      default:
        return state;
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
})


var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log("Name is", state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New State: ', store.getState());
});

var currentSate = store.getState();
//unsubscribe();


console.log('currentSate', currentSate);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Stephen'
});


store.dispatch ({
  type:'ADD_HOBBY',
  hobby:'Running'
});

store.dispatch ({
  type:'ADD_HOBBY',
  hobby:'Walking'
});

store.dispatch({
  type:'REMOVE_HOBBY',
  id:2
});


store.dispatch({
  type: 'CHANGE_NAME',
  name:'Emily'
});

store.dispatch ({
  type:'ADD_MOVIE',
  title:'Mad Max',
  genre:'action'
});

store.dispatch ({
  type:'ADD_MOVIE',
  title:'Legally Blonde',
  genre:'drama'
});

store.dispatch({
  type:'REMOVE_MOVIE',
  id:2
});
