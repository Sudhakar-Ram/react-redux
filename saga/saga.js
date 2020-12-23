import {takeEvery, put, delay} from "redux-saga/effects";

function* countUpAsyn(){
    yield delay(4000);
    yield put({type: "COUNTER_INCREAMENT"});
}
export function* watchCountUp(){
    yield takeEvery("COUNTER_INCREAMENT", countUpAsyn);
}