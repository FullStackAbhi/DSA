function quickSort(n) {
  if (n.length <= 1) return n;
  let pivot = n[0];

  let left = [];
  let right = [];
  for (let index = 1; index < n.length; index++) {
    if (n[index] < pivot) {
      left.push(n[index]);
    } else {
      right.push(n[index]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 7, 6, 5, 4, 3, 2, 1]));
