// const combineReducers = reducers => {
//   return (state = {}, action) => {
//       const nextState = {};
//       for(let key in reducers) {
//           nextState[key] = reducers[key](state[key], action);
//       }
//       return nextState;
//   };
// };

const combineReducers = (reducers) => {
  return (state, action) => {
    Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
};
