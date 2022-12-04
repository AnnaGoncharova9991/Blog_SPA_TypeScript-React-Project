import { all, fork } from "redux-saga/effects";
import { watchArticlesSaga } from "./articlesSaga";
import { watchAuthSaga } from "./authSaga";
import { watchBlogsSaga } from "./blogsSaga";

export function* rootSaga(){
    yield all([fork(watchAuthSaga), fork(watchBlogsSaga), fork(watchArticlesSaga)])
}