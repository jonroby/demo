import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchGithubRepoSuccess,
  fetchGithubRepoFailure,
} from "../actions/creators";
import { FETCH_GITHUB_REPO } from "../actions/constants";
import request from "./requests/repo";

export function* repoRequest(action) {
  try {
    const response = yield call(...request);

    if (response.status >= 200 && response.status < 300) {
      const data = yield response.json();
      yield put(fetchGithubRepoSuccess(data));
    } else {
      throw response;
    }
  } catch (error) {
    yield put(fetchGithubRepoFailure(error));
  }
}

function* repo() {
  yield takeEvery(FETCH_GITHUB_REPO, repoRequest);
}

export default repo;
