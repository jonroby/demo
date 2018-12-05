import {
  FETCH_GITHUB_REPO,
  FETCH_GITHUB_REPO_SUCCESS,
  FETCH_GITHUB_REPO_FAILURE,
} from "../actions/constants";
const initialState = {};

const repo = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GITHUB_REPO:
      return state;
    case FETCH_GITHUB_REPO_SUCCESS:
      return state;
    case FETCH_GITHUB_REPO_FAILURE:
      return state;
    default:
      return state;
  }
};

export default repo;
