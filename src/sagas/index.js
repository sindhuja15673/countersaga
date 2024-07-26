import { all } from "redux-saga/effects";
import { watchSagaUsers } from "./saga";

function* rootSaga(){
    yield all([
        watchSagaUsers(),
    ]);
}
export default rootSaga;