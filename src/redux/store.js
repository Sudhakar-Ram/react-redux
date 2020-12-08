import * as redux from 'redux';

export const COUNTER_INCREAMENT = 'COUNTER_INCREAMENT';
export const COUNTER_DECREAMENT = 'COUNTER_DECREAMENT';

const intialState = {
    count:0
}
const reducer = (state = intialState, action) => {
    switch(action.type){
        case COUNTER_INCREAMENT: {
            return {...state, count: state.count + 1};
            //break;
        }
        case COUNTER_DECREAMENT: {
            return {...state, count: state.count - 1};
            //break;
        }
        default: {
            return state;
        }
    }
}
const store = redux.createStore(reducer);
export default store;