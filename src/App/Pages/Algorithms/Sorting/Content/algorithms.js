import { swap } from "./utilities";

// Bubble sort
const bubble = (array) => {
  let actions = [];
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      actions.push({ type: "comparison", items: [j, j + 1] });
      if (array[j] > array[j + 1]) {
        //callbackSwap(array, j, j + 1);
        actions.push({ type: "swap", items: [j, j + 1] });
        swap(array, j, j + 1);
      }
    }
  }
  //return array;
  return actions;
};

// Merge sort
const merge = (array) => {
  let actions = [];
  const mergeArrays = (left, right) => {
    let tempArray = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        tempArray.push(left.shift());
      } else {
        tempArray.push(right.shift());
      }
    }
    return [...tempArray, ...left, ...right];
  };

  const sort = (array) => {
    const half = array.length / 2;
    if (array.length < 2) {
      return array;
    }
    const left = array.splice(0, half);
    return mergeArrays(sort(left), sort(array));
  };

  sort(array);
  return actions;
};

// Selection sort
export const selection = (array) => {
  let actions = [];
  let minIndex;
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < n; j++) {
      actions.push({ type: "comparison", items: [j, minIndex] });
      if (array[j] < array[minIndex]) minIndex = j;
    }
    actions.push({ type: "swap", items: [i, minIndex] });
    swap(array, i, minIndex);
  }
  return actions;
};

//Quick sort
const quick = (array) => {
  let actions = [];
  const partition = (array, lowIndex, highIndex) => {
    let pivot = array[highIndex];
    let i = lowIndex - 1;
    for (let j = lowIndex; j <= highIndex - 1; j++) {
      actions.push({ type: "comparison", items: [j, highIndex] });
      if (array[j] < pivot) {
        i++;
        actions.push({ type: "swap", items: [i, j] });
        swap(array, i, j);
      }
    }
    actions.push({ type: "swap", items: [i + 1, highIndex] });
    swap(array, i + 1, highIndex);
    return i + 1;
  };

  const sort = (array, lowIndex, highIndex) => {
    actions.push({ type: "comparison", items: [lowIndex, highIndex] });
    if (lowIndex < highIndex) {
      let partitionIndex = partition(array, lowIndex, highIndex);
      sort(array, lowIndex, partitionIndex - 1);
      sort(array, partitionIndex + 1, highIndex);
    }
    return array;
  };

  sort(array, 0, array.length - 1).shift();
  console.log(array);
  return actions;
};

const algorithms = [
  { label: "Bubble", func: bubble },
  //  { label: "Merge", func: merge },
  { label: "Selection", func: selection },
  { label: "Quick", func: quick },
];

export default algorithms;
