export default function createStore(reducer, preloadedState) {
    let state = preloadedState;
    const listeners = [];
    function getState() {
        return state;
    }
    function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach((l) => l());
    }
    function subscribe(listener) {
        listeners.push(listener);
    }
    const store = {
        getState,
        dispatch,
        subscribe,
    };
    return store;
}
