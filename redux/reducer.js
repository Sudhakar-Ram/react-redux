import {COUNTER_INCREAMENT, COUNTER_DECREAMENT, COUNTER_RESET} from '../redux/action_type';
export const intialState = {
    count:10
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
        case COUNTER_RESET: {
            return {...state, count: intialState.count};
            //break;
        }
        default: {
            return state;
        }
    }
}
export default reducer;