import { takeEvery, call, put } from "@redux-saga/core/effects";
import axios from "axios";
import {fetchPostSuccess, fetchPostFailure } from '../posts/postAction'
import { FETCH_POST_REQUEST } from "../posts/postTypes";

function* fetchPost(action){
    try {
        const apiEndPoint= `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
        const response = yield call(() => axios.get(apiEndPoint));
        yield put(fetchPostSuccess(response.data))
    } catch (error) {
        yield put(fetchPostFailure(error.message))
    }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}
