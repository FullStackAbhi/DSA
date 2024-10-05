function quickSort(n) {
  if (n.length <= 1) return n;
  let pivot = n[0];

  let left = [];
  let right = [];
  for (let i = 1; i < n.length; i++) {
    if (n[i] < pivot) {
      left.push(n[i]);
    } else {
      right.push(n[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([8, 7, 6, 5, 4, 3, 2, 1]));
