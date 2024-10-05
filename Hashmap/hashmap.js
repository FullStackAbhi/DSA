// How many times the element is there in the str

function Hashing(arr, char) {
  //   console.log(Hash.length);

  //   precompute
  let num = Math.max(...arr);
  //   console.log(num);
  let Hash = new Array(num + 1);
  for (let i = 0; i < arr.length; i++) {
    if (!Hash[arr[i]]) {
      Hash[arr[i]] = 1;
    } else {
      Hash[arr[i]] += 1;
    }
  }
  let item = Hash.filter((ele) => ele !== undefined);
  let max = Math.max(...item);
  let min = Math.min(...item);
//   console.log(min);
//   console.log(max);
  //   console.log(...item);
  console.log(Hash.indexOf(max), Hash.indexOf(min));
}

Hashing([10, 5, 10, 15, 10, 5]);
