import * as types from "./constants";

export const increment = payload => ({
  type: types.INCREMENT,
  payload,
});

export const decrement = payload => ({
  type: types.DECREMENT,
  payload,
});
