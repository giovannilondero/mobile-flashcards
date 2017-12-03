export const shuffle = (arr = []) => {
  let _arr = arr.slice();
  return Array.from(
    { length: _arr.length },
    () => _arr.splice(Math.round(Math.random() * (_arr.length - 1)), 1)[0],
  );
};

export const nextDay = () => {
  const _nextDay = new Date();
  _nextDay.setDate(_nextDay.getDate());
  _nextDay.setHours(8);
  _nextDay.setMinutes(0);
  return _nextDay;
};

// Catch async errors

export const catchAsyncErrors = fn => (...args) =>
  fn(...args).catch(err => {
    console.error(err);
  });

export const catchAsyncActionsErrors = fn => dispatch =>
  fn(dispatch).catch(err => {
    console.error(err);
  });
