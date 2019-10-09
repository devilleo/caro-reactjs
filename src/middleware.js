import { changeTurn } from "./actions/index";

const isOver = (arr, index, value) => {
  let count = 1;
  let increase = index;
  let continueIncrease = true;
  let decrease = index;
  let continueDecrease = true;
  let chan1dau = false;
  let chan2dau = false;
  let indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 20 >= 0 &&
        value === arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        count += 1;
        decrease -= 20;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 20 >= 0 &&
        value !== arr[decrease - 20] &&
        arr[decrease - 20] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 20 <= 399 &&
        value === arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        count += 1;
        increase += 20;
        indexDrawArrs.push(increase);
      } else if (
        increase + 20 <= 399 &&
        value !== arr[increase + 20] &&
        arr[increase + 20] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease % 20 !== 0 &&
        value === arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        count += 1;
        decrease -= 1;
        indexDrawArrs.push(decrease);
      } else if (
        decrease % 20 !== 0 &&
        value !== arr[decrease - 1] &&
        arr[decrease - 1] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        (increase - 19) % 20 !== 0 &&
        value === arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        count += 1;
        increase += 1;
        indexDrawArrs.push(increase);
      } else if (
        (increase - 19) % 20 !== 0 &&
        value !== arr[increase + 1] &&
        arr[increase + 1] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  // hướng đi từ 1 xuống 9
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value === arr[decrease - 21] &&
        arr[decrease - 20 - 1] !== 0
      ) {
        count += 1;
        decrease -= 21;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 21 >= 0 &&
        decrease % 20 !== 0 &&
        value !== arr[decrease - 21] &&
        arr[decrease - 21] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 21 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        count += 1;
        increase += 20 + 1;
        indexDrawArrs.push(increase);
      } else if (
        increase + 20 + 1 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 21] &&
        arr[increase + 21] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count >= 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  // hướng đi từ 3 xuống 7
  count = 1;
  increase = index;
  continueIncrease = true;
  decrease = index;
  continueDecrease = true;
  chan1dau = false;
  chan2dau = false;
  indexDrawArrs = [];
  indexDrawArrs.push(index);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    while (continueDecrease) {
      if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value === arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        count += 1;
        decrease -= 19;
        indexDrawArrs.push(decrease);
      } else if (
        decrease - 19 >= 0 &&
        (decrease + 1) % 20 !== 0 &&
        value !== arr[decrease - 19] &&
        arr[decrease - 19] !== 0
      ) {
        chan1dau = true;
        continueDecrease = false;
      } else {
        continueDecrease = false;
      }
    }
    while (continueIncrease) {
      if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value === arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        count += 1;
        increase += 19;
        indexDrawArrs.push(increase);
      } else if (
        increase + 19 <= 399 &&
        increase % 20 !== 0 &&
        value !== arr[increase + 19] &&
        arr[increase + 19] !== 0
      ) {
        chan2dau = true;
        continueIncrease = false;
      } else {
        continueIncrease = false;
      }
    }
    if (continueIncrease === false && continueDecrease === false) break;
  }
  if (count === 5 && (chan1dau === false || chan2dau === false))
    return indexDrawArrs;
  if (count > 5) return indexDrawArrs;
  return false;
};
export default store => next => action => {
  switch (action.type) {
    case "TOGGLE_SQUARE": {
      const { square } = store.getState();
      if (square[action.id] === 0) {
        store.dispatch(changeTurn());
        if (isOver(square, action.id, action.turn ? 1 : 2))
          console.log("game over");
        next(action);
      }
      break;
    }
    default:
      next(action);
  }
};
