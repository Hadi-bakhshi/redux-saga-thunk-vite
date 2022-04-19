import { all } from "redux-saga/effects";
import { watchFetchPost } from "./postSaga";
// *generic function
export function* rootSaga() {
  yield all([watchFetchPost()]);
}
