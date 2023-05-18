// Time Complexity O(n + k), where n is the number of elements and k is the number of buckets.

// Auxiliary Space O(n + k). This is because we need to create a new array of size k to store the buckets and another array of size n to store the sorted elements.

function bucketSort(arr, n) {
  if (n <= 0) return;

  // 1) Create n empty buckets
  let buckets = new Array(n);

  for (let i = 0; i < n; i++) {
    buckets[i] = [];
  }

  // 2) Put array elements in different buckets
  for (let i = 0; i < n; i++) {
    let idx = arr[i] * n;
    let flr = Math.floor(idx);
    buckets[flr].push(arr[i]);
  }

  // 3) Sort individual buckets
  for (let i = 0; i < n; i++) {
    buckets[i].sort(function (a, b) {
      return a - b;
    });
  }

  // 4) Concatenate all buckets into arr[]
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}
