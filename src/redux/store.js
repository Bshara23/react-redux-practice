import { createStore } from "redux";

const initialState = {
  posts: [],
  posts2: [],

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        posts: state.posts.concat(action.payload),
      });
    case "ADD_POST2":
      return Object.assign({}, state, {
        posts2: action.payload,
      });

    default:
      break;
  }


  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
