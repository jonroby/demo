import { all, call } from "redux-saga/effects";

import repo from "./repo";

export default function* rootSaga() {
  yield all([call(repo)]);
}
