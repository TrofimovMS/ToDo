import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducers";

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, store.getState());
  return next(action);
};

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }
  return next(action);
};

// enhancer - улучшать, улучшили store, который умеет принимать строки
// const stringEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     if (typeof action === "string") {
//       return originalDispatch({ type: action });
//     }
//     return originalDispatch(action);
//   };
//   return store;
// };

// const logEnhancer = (createStore) => (...args) => {
//   const store = createStore(...args);
//   const originalDispatch = store.dispatch;
//   store.dispatch = (action) => {
//     console.log(action.type);
//     return originalDispatch(action);
//   };
//   return store;
// };

// compose(stringEnhancer, logEnhancer);

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);
store.dispatch("HELLO_WORLD");

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(
    () =>
      dispatch({
        type: "DELAYED_ACTION",
      }),
    timeout
  );
};

store.dispatch(delayedActionCreator(3000));

export default store;
