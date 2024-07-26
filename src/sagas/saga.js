import { takeEvery,put } from "redux-saga/effects";
import { INCREMENT, DECREMENT, INCREMENT_REQUEST,DECREMENT_REQUEST } from "../actions";

export function* watchSagaUsers(){
    yield takeEvery(INCREMENT_REQUEST, incrementSaga);
    yield takeEvery(DECREMENT_REQUEST, decrementSaga);
}

function* incrementSaga(){
    yield put({type: INCREMENT});
}

function* decrementSaga(){
    yield put({type: DECREMENT});
}