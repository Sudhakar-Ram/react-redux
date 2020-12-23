import {createStore, combineReducers, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from "./reducer";
import {watchCountUp} from "../saga/saga";

const rootReducer = combineReducers({
    reducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchCountUp);
export default store;