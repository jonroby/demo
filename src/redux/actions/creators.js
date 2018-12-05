import * as types from "./constants";

export const increment = payload => ({
  type: types.INCREMENT,
  payload,
});

export const decrement = payload => ({
  type: types.DECREMENT,
  payload,
});

export const fetchGithubRepo = payload => ({
  type: types.FETCH_GITHUB_REPO,
  payload
});

export const fetchGithubRepoSuccess = payload => ({
  type: types.FETCH_GITHUB_REPO_SUCCESS,
  payload
});

export const fetchGithubRepoFailure = payload => ({
  type: types.FETCH_GITHUB_REPO_FAILURE,
  payload
});
