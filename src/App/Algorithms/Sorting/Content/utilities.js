export const delay = (millis) =>
  new Promise((resolve, reject) => {
    setTimeout((_) => resolve(), millis);
  });

export const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
  return array;
};

export const createArray = (length) => {
  var array = [];
  for (let i = 1; i < length + 1; i++) {
    array.push(i);
  }
  return array;
};

export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
};
