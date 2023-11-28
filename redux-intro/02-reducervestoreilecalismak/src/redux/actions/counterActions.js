import * as actionsTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionsTypes.INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: actionsTypes.DECREASE_COUNTER,
  payload: 1,
});

